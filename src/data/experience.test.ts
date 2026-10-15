import { describe, it, expect } from 'vitest';
import { experiences } from './experience';

const PERIOD = /^(\d{4}-\d{2}) - (\d{4}-\d{2}|Present)$/;

describe('experience timeline', () => {
  it('has unique ids', () => {
    const ids = experiences.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('marks exactly one current role', () => {
    expect(experiences.filter((e) => e.status === 'current')).toHaveLength(1);
  });

  it('uses "YYYY-MM - YYYY-MM|Present" periods that end after they start', () => {
    for (const exp of experiences) {
      const match = exp.period.match(PERIOD);
      expect(match, exp.id).not.toBeNull();
      const [, start, end] = match!;
      if (end !== 'Present') expect(end >= start, exp.id).toBe(true);
    }
  });

  it('lists roles newest-first', () => {
    const starts = experiences.map((e) => e.period.slice(0, 7));
    expect([...starts].sort().reverse()).toEqual(starts);
  });

  it('gives every role a summary, achievements, and technologies', () => {
    for (const exp of experiences) {
      expect(exp.summary.length, exp.id).toBeGreaterThan(0);
      expect(exp.achievements.length, exp.id).toBeGreaterThan(0);
      expect(exp.technologies.length, exp.id).toBeGreaterThan(0);
    }
  });
});
