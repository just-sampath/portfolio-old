import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useContactForm } from './useContactForm';
import * as emailjsClient from '../lib/emailjsClient';

vi.mock('../lib/emailjsClient', () => ({
  sendContactEmail: vi.fn(),
}));

const sendContactEmail = vi.mocked(emailjsClient.sendContactEmail);

function fillValid(result: { current: ReturnType<typeof useContactForm> }) {
  act(() => {
    result.current.setField('name', 'Sam');
    result.current.setField('email', 'sam@example.com');
    result.current.setField('message', 'Interested in working together.');
  });
}

describe('useContactForm', () => {
  beforeEach(() => {
    sendContactEmail.mockReset();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('sets field errors and does not send when validation fails', async () => {
    const { result } = renderHook(() => useContactForm());

    await act(async () => {
      await result.current.submit();
    });

    expect(result.current.errors.name).toBeTruthy();
    expect(result.current.errors.email).toBeTruthy();
    expect(result.current.errors.message).toBeTruthy();
    expect(result.current.status).toBe('error');
    expect(result.current.statusMessage).toMatch(/fix/i);
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it('rejects invalid email without calling send', async () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.setField('name', 'Sam');
      result.current.setField('email', 'not-an-email');
      result.current.setField('message', 'Long enough message body');
    });

    await act(async () => {
      await result.current.submit();
    });

    expect(result.current.errors.email).toBeTruthy();
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it('sends when valid and sets success status', async () => {
    sendContactEmail.mockResolvedValueOnce(undefined);
    const { result } = renderHook(() => useContactForm());
    fillValid(result);

    await act(async () => {
      await result.current.submit();
    });

    await waitFor(() => {
      expect(result.current.status).toBe('success');
    });

    expect(sendContactEmail).toHaveBeenCalledTimes(1);
    expect(sendContactEmail).toHaveBeenCalledWith({
      name: 'Sam',
      email: 'sam@example.com',
      message: 'Interested in working together.',
    });
    expect(result.current.fields).toEqual({ name: '', email: '', message: '' });
    expect(result.current.statusMessage).toMatch(/sent/i);
  });

  it('maps send failures to a safe user message', async () => {
    sendContactEmail.mockRejectedValueOnce(
      new Error(
        'EmailJS is not configured. Missing env: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY. Copy .env.example to .env and set your keys.',
      ),
    );
    const { result } = renderHook(() => useContactForm());
    fillValid(result);

    await act(async () => {
      await result.current.submit();
    });

    await waitFor(() => {
      expect(result.current.status).toBe('error');
    });

    expect(result.current.statusMessage).toMatch(/unavailable|try again/i);
    // Production path should not dump raw env key names; DEV may append detail.
    if (!import.meta.env.DEV) {
      expect(result.current.statusMessage).not.toMatch(/VITE_EMAILJS_/);
    }
  });

  it('ignores concurrent double-submit (single send)', async () => {
    let resolveSend!: () => void;
    sendContactEmail.mockImplementation(
      () =>
        new Promise<void>((resolve) => {
          resolveSend = resolve;
        }),
    );

    const { result } = renderHook(() => useContactForm());
    fillValid(result);

    let first: Promise<void>;
    let second: Promise<void>;
    await act(async () => {
      first = result.current.submit();
      second = result.current.submit();
      await Promise.resolve();
    });

    expect(sendContactEmail).toHaveBeenCalledTimes(1);
    expect(result.current.status).toBe('submitting');

    await act(async () => {
      resolveSend();
      await first!;
      await second!;
    });

    await waitFor(() => {
      expect(result.current.status).toBe('success');
    });
    expect(sendContactEmail).toHaveBeenCalledTimes(1);
  });

  it('reset clears fields, errors, and status', async () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.setField('name', 'Sam');
    });

    await act(async () => {
      await result.current.submit();
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.fields).toEqual({ name: '', email: '', message: '' });
    expect(result.current.errors).toEqual({});
    expect(result.current.status).toBe('idle');
    expect(result.current.statusMessage).toBe('');
  });
});
