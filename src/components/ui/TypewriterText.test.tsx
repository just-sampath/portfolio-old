import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import TypewriterText from './TypewriterText';

describe('TypewriterText', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('does not throw after unmount during typing', () => {
    const { unmount } = render(<TypewriterText text="HELLO" delay={0} />);
    act(() => {
      vi.advanceTimersByTime(60); // a few chars
    });
    unmount();
    expect(() => {
      act(() => {
        vi.advanceTimersByTime(5000);
      });
    }).not.toThrow();
  });
});
