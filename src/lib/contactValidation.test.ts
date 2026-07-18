import { describe, it, expect } from 'vitest';
import { validateContact, CONTACT_LIMITS } from './contactValidation';

describe('validateContact', () => {
  it('returns errors for empty fields', () => {
    const errors = validateContact({ name: '', email: '', message: '' });
    expect(errors.name).toBeTruthy();
    expect(errors.email).toBeTruthy();
    expect(errors.message).toBeTruthy();
  });

  it('rejects invalid email', () => {
    const errors = validateContact({
      name: 'Sam',
      email: 'not-an-email',
      message: 'Hello there friend',
    });
    expect(errors.email).toBeTruthy();
  });

  it('rejects short message', () => {
    const errors = validateContact({
      name: 'Sam',
      email: 'a@b.co',
      message: 'Hi',
    });
    expect(errors.message).toBeTruthy();
  });

  it('rejects oversize name', () => {
    const errors = validateContact({
      name: 'x'.repeat(CONTACT_LIMITS.name.max + 1),
      email: 'sam@example.com',
      message: 'Interested in working together.',
    });
    expect(errors.name).toMatch(/at most/i);
  });

  it('rejects oversize message', () => {
    const errors = validateContact({
      name: 'Sam',
      email: 'sam@example.com',
      message: 'x'.repeat(CONTACT_LIMITS.message.max + 1),
    });
    expect(errors.message).toMatch(/at most/i);
  });

  it('rejects oversize email', () => {
    const local = 'a'.repeat(250);
    const errors = validateContact({
      name: 'Sam',
      email: `${local}@x.co`,
      message: 'Interested in working together.',
    });
    expect(errors.email).toBeTruthy();
  });

  it('accepts boundary max lengths', () => {
    const errors = validateContact({
      name: 'x'.repeat(CONTACT_LIMITS.name.max),
      email: 'sam@example.com',
      message: 'x'.repeat(CONTACT_LIMITS.message.max),
    });
    expect(errors).toEqual({});
  });

  it('returns empty object when valid', () => {
    const errors = validateContact({
      name: 'Sam',
      email: 'sam@example.com',
      message: 'Interested in working together.',
    });
    expect(errors).toEqual({});
  });
});
