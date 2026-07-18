import emailjs from '@emailjs/browser';
import type { ContactFields } from './contactValidation';

export type SendContactPayload = ContactFields;

/** True when all three VITE_EMAILJS_* values are present (non-empty after trim). */
export function isEmailJsConfigured(): boolean {
  return Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() &&
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() &&
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim(),
  );
}

function getEmailJsConfig(): {
  serviceId: string;
  templateId: string;
  publicKey: string;
} {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

  const missing: string[] = [];
  if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID');
  if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID');
  if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY');

  if (missing.length > 0 || !serviceId || !templateId || !publicKey) {
    throw new Error(
      `EmailJS is not configured. Missing env: ${missing.join(', ') || 'unknown'}. Copy .env.example to .env and set your keys.`,
    );
  }

  return { serviceId, templateId, publicKey };
}

/**
 * Sends a contact form payload via EmailJS.
 * Throws Error if env is missing or EmailJS rejects the request.
 */
export async function sendContactEmail(payload: SendContactPayload): Promise<void> {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: payload.name.trim(),
        from_email: payload.email.trim(),
        message: payload.message.trim(),
        reply_to: payload.email.trim(),
      },
      { publicKey },
    );
  } catch (err) {
    const message =
      err instanceof Error
        ? err.message
        : typeof err === 'object' && err !== null && 'text' in err
          ? String((err as { text: unknown }).text)
          : 'Failed to send message';
    throw new Error(message || 'Failed to send message');
  }
}
