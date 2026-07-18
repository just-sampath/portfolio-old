import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const send = vi.fn();

vi.mock('@emailjs/browser', () => ({
  default: { send },
}));

describe('sendContactEmail', () => {
  const originalEnv = { ...import.meta.env };

  beforeEach(() => {
    send.mockReset();
    // Reset to known empty defaults for each test
    // @ts-expect-error — test overrides Vite env
    import.meta.env.VITE_EMAILJS_SERVICE_ID = '';
    // @ts-expect-error — test overrides Vite env
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID = '';
    // @ts-expect-error — test overrides Vite env
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY = '';
  });

  afterEach(() => {
    // @ts-expect-error — restore
    import.meta.env.VITE_EMAILJS_SERVICE_ID = originalEnv.VITE_EMAILJS_SERVICE_ID;
    // @ts-expect-error — restore
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID = originalEnv.VITE_EMAILJS_TEMPLATE_ID;
    // @ts-expect-error — restore
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY = originalEnv.VITE_EMAILJS_PUBLIC_KEY;
    vi.resetModules();
  });

  it('throws a clear Error when EmailJS env vars are missing', async () => {
    const { sendContactEmail } = await import('./emailjsClient');

    await expect(
      sendContactEmail({
        name: 'Sam',
        email: 'sam@example.com',
        message: 'Hello there friend',
      }),
    ).rejects.toThrow(/EmailJS is not configured/i);

    await expect(
      sendContactEmail({
        name: 'Sam',
        email: 'sam@example.com',
        message: 'Hello there friend',
      }),
    ).rejects.toThrow(/VITE_EMAILJS_SERVICE_ID/);

    expect(send).not.toHaveBeenCalled();
  });

  it('throws listing each missing key', async () => {
    // @ts-expect-error — test override
    import.meta.env.VITE_EMAILJS_SERVICE_ID = 'svc';
    // template + public still empty

    const { sendContactEmail } = await import('./emailjsClient');

    await expect(
      sendContactEmail({
        name: 'Sam',
        email: 'sam@example.com',
        message: 'Hello there friend',
      }),
    ).rejects.toThrow(/VITE_EMAILJS_TEMPLATE_ID/);

    await expect(
      sendContactEmail({
        name: 'Sam',
        email: 'sam@example.com',
        message: 'Hello there friend',
      }),
    ).rejects.toThrow(/VITE_EMAILJS_PUBLIC_KEY/);

    expect(send).not.toHaveBeenCalled();
  });

  it('calls emailjs.send when env is configured', async () => {
    // @ts-expect-error — test override
    import.meta.env.VITE_EMAILJS_SERVICE_ID = 'service_x';
    // @ts-expect-error — test override
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID = 'template_y';
    // @ts-expect-error — test override
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY = 'public_z';

    send.mockResolvedValueOnce({ status: 200, text: 'OK' });

    const { sendContactEmail } = await import('./emailjsClient');

    await sendContactEmail({
      name: ' Sam ',
      email: ' sam@example.com ',
      message: '  Hello there friend  ',
    });

    expect(send).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith(
      'service_x',
      'template_y',
      {
        from_name: 'Sam',
        from_email: 'sam@example.com',
        message: 'Hello there friend',
        reply_to: 'sam@example.com',
      },
      { publicKey: 'public_z' },
    );
  });
});
