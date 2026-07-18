import { useCallback, useRef, useState, type FormEvent } from 'react';
import {
  validateContact,
  type ContactFieldErrors,
  type ContactFields,
} from '../lib/contactValidation';
import { sendContactEmail } from '../lib/emailjsClient';

const EMPTY_FIELDS: ContactFields = { name: '', email: '', message: '' };

const MSG_CONFIG =
  'Contact form is temporarily unavailable.';
const MSG_SEND_FAIL = 'Could not send message. Please try again.';
const MSG_VALIDATION = 'Please fix the highlighted fields.';
const MSG_SUCCESS = 'Message sent. I will get back to you soon.';

export type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'error';

function mapSendError(err: unknown): string {
  const raw = err instanceof Error ? err.message : String(err ?? '');
  if (import.meta.env.DEV && raw) {
    if (/not configured|Missing env/i.test(raw)) return `${MSG_CONFIG} (${raw})`;
    return `${MSG_SEND_FAIL} (${raw})`;
  }
  if (/not configured|Missing env/i.test(raw)) return MSG_CONFIG;
  return MSG_SEND_FAIL;
}

export function useContactForm(): {
  fields: ContactFields;
  errors: ContactFieldErrors;
  status: ContactFormStatus;
  statusMessage: string;
  setField: (key: keyof ContactFields, value: string) => void;
  submit: (e?: FormEvent) => Promise<void>;
  reset: () => void;
} {
  const [fields, setFields] = useState<ContactFields>(EMPTY_FIELDS);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const inFlightRef = useRef(false);
  const generationRef = useRef(0);

  const setField = useCallback(
    (key: keyof ContactFields, value: string) => {
      setFields((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => {
        if (!prev[key]) return prev;
        const next = { ...prev };
        delete next[key];
        return next;
      });
      // Clear success/error banners when the user starts editing again.
      if (status === 'success' || status === 'error') {
        setStatus('idle');
        setStatusMessage('');
      }
    },
    [status],
  );

  const reset = useCallback(() => {
    // Invalidate any in-flight submit so it cannot overwrite UI after reset.
    generationRef.current += 1;
    inFlightRef.current = false;
    setFields(EMPTY_FIELDS);
    setErrors({});
    setStatus('idle');
    setStatusMessage('');
  }, []);

  const submit = useCallback(
    async (e?: FormEvent) => {
      e?.preventDefault();

      if (inFlightRef.current) return;

      const nextErrors = validateContact(fields);
      setErrors(nextErrors);

      if (Object.keys(nextErrors).length > 0) {
        setStatus('error');
        setStatusMessage(MSG_VALIDATION);
        return;
      }

      inFlightRef.current = true;
      const generation = ++generationRef.current;
      setStatus('submitting');
      setStatusMessage('');

      try {
        await sendContactEmail(fields);
        if (generation !== generationRef.current) return;
        setStatus('success');
        setStatusMessage(MSG_SUCCESS);
        setFields(EMPTY_FIELDS);
        setErrors({});
      } catch (err) {
        if (generation !== generationRef.current) return;
        setStatus('error');
        setStatusMessage(mapSendError(err));
      } finally {
        if (generation === generationRef.current) {
          inFlightRef.current = false;
        }
      }
    },
    [fields],
  );

  return {
    fields,
    errors,
    status,
    statusMessage,
    setField,
    submit,
    reset,
  };
}
