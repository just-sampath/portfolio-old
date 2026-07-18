export type ContactFields = { name: string; email: string; message: string };
export type ContactFieldErrors = Partial<Record<keyof ContactFields, string>>;

export const CONTACT_LIMITS = {
  name: { min: 1, max: 100 },
  email: { max: 254 },
  message: { min: 10, max: 5000 },
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(fields: ContactFields): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const message = fields.message.trim();

  if (!name) errors.name = 'Name is required';
  else if (name.length > CONTACT_LIMITS.name.max) {
    errors.name = `Name must be at most ${CONTACT_LIMITS.name.max} characters`;
  }

  if (!email) errors.email = 'Email is required';
  else if (email.length > CONTACT_LIMITS.email.max) {
    errors.email = `Email must be at most ${CONTACT_LIMITS.email.max} characters`;
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Enter a valid email';
  }

  if (!message) errors.message = 'Message is required';
  else if (message.length < CONTACT_LIMITS.message.min) {
    errors.message = `Message must be at least ${CONTACT_LIMITS.message.min} characters`;
  } else if (message.length > CONTACT_LIMITS.message.max) {
    errors.message = `Message must be at most ${CONTACT_LIMITS.message.max} characters`;
  }

  return errors;
}
