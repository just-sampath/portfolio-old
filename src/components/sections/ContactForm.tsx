import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import {
  CONTACT_LIMITS,
  type ContactFields,
} from '../../lib/contactValidation';
import { isEmailJsConfigured } from '../../lib/emailjsClient';

const FIELD_LABELS: Record<keyof ContactFields, string> = {
  name: 'NAME_INPUT',
  email: 'EMAIL_INPUT',
  message: 'MESSAGE_BODY',
};

const MAX_LENGTH: Record<keyof ContactFields, number> = {
  name: CONTACT_LIMITS.name.max,
  email: CONTACT_LIMITS.email.max,
  message: CONTACT_LIMITS.message.max,
};

const fieldClass = (hasError: boolean) =>
  `w-full bg-black border px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus:border-white disabled:opacity-50 ${
    hasError ? 'border-red-500/70' : 'border-white/20'
  }`;

const ContactForm: React.FC = () => {
  const { fields, errors, status, statusMessage, setField, submit } = useContactForm();
  const submitting = status === 'submitting';
  const configured = isEmailJsConfigured();
  const disabled = submitting || !configured;

  return (
    <form
      onSubmit={configured ? submit : (e) => e.preventDefault()}
      noValidate
      className="font-mono border border-white/20 bg-black p-6 sm:p-8 space-y-5"
      aria-label="Contact form"
      aria-busy={submitting}
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-1">
        <span className="text-[10px] uppercase tracking-widest text-gray-400">
          // INITIATE_TRANSMISSION
        </span>
        <span className="text-[10px] text-gray-400">contact.form</span>
      </div>

      {!configured && (
        <p role="status" className="text-xs text-amber-400/90 border border-amber-400/30 bg-amber-400/5 px-3 py-2">
          ! Contact form is temporarily unavailable. Please use the email or social links instead.
        </p>
      )}

      {(Object.keys(FIELD_LABELS) as (keyof ContactFields)[]).map((key) => {
        const id = `contact-${key}`;
        const errorId = `${id}-error`;
        const hasError = Boolean(errors[key]);
        const isMessage = key === 'message';

        return (
          <div key={key} className="space-y-1.5">
            <label
              htmlFor={id}
              className="block text-[10px] uppercase tracking-widest text-gray-400"
            >
              {FIELD_LABELS[key]}
            </label>
            {isMessage ? (
              <textarea
                id={id}
                name={key}
                rows={5}
                maxLength={MAX_LENGTH[key]}
                value={fields[key]}
                onChange={(e) => setField(key, e.target.value)}
                disabled={disabled}
                aria-invalid={hasError}
                aria-describedby={hasError ? errorId : undefined}
                className={`${fieldClass(hasError)} resize-y min-h-[120px]`}
                placeholder="Describe the opportunity or question..."
              />
            ) : (
              <input
                id={id}
                name={key}
                type={key === 'email' ? 'email' : 'text'}
                maxLength={MAX_LENGTH[key]}
                value={fields[key]}
                onChange={(e) => setField(key, e.target.value)}
                disabled={disabled}
                aria-invalid={hasError}
                aria-describedby={hasError ? errorId : undefined}
                autoComplete={key === 'email' ? 'email' : 'name'}
                className={fieldClass(hasError)}
                placeholder={key === 'email' ? 'you@domain.com' : 'Your name'}
              />
            )}
            {hasError && (
              <p id={errorId} role="alert" className="text-[11px] text-red-400">
                {errors[key]}
              </p>
            )}
          </div>
        );
      })}

      {statusMessage && (
        <p
          role="status"
          aria-live="polite"
          className={`text-xs ${
            status === 'success'
              ? 'text-green-400'
              : status === 'error'
                ? 'text-red-400'
                : 'text-gray-400'
          }`}
        >
          {status === 'success' ? '> ' : status === 'error' ? '! ' : ''}
          {statusMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={disabled}
        className="w-full sm:w-auto border border-white bg-white text-black px-6 py-2.5 text-xs uppercase tracking-widest font-bold hover:bg-transparent hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {!configured ? 'UNAVAILABLE' : submitting ? 'SENDING...' : 'SEND_MESSAGE'}
      </button>
    </form>
  );
};

export default ContactForm;
