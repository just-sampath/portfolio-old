import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useEscapeKey } from './useEscapeKey';

describe('useEscapeKey', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('calls handler on Escape keydown when enabled', () => {
    const handler = vi.fn();
    renderHook(() => useEscapeKey(handler, true));

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('does not call handler when disabled', () => {
    const handler = vi.fn();
    renderHook(() => useEscapeKey(handler, false));

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(handler).not.toHaveBeenCalled();
  });

  it('defaults enabled to true when omitted', () => {
    const handler = vi.fn();
    renderHook(() => useEscapeKey(handler));

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('ignores non-Escape keys', () => {
    const handler = vi.fn();
    renderHook(() => useEscapeKey(handler, true));

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

    expect(handler).not.toHaveBeenCalled();
  });

  it('stops listening after unmount', () => {
    const handler = vi.fn();
    const { unmount } = renderHook(() => useEscapeKey(handler, true));

    unmount();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    expect(handler).not.toHaveBeenCalled();
  });
});
