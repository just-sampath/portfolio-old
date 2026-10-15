import { describe, it, expect } from 'vitest';
import { caseStudies } from './caseStudies';
import { experiences } from './experience';

describe('case studies', () => {
  it('has unique ids', () => {
    const ids = caseStudies.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('ties every case study to a role listed in Experience', () => {
    const roles = new Set(experiences.map((e) => `${e.company}|${e.role}`));
    for (const c of caseStudies) {
      expect(roles.has(`${c.employer}|${c.role}`), c.id).toBe(true);
    }
  });

  it('lists employers newest-first, following the Experience order', () => {
    const order = experiences.map((e) => e.company);
    const positions = caseStudies.map((c) => order.indexOf(c.employer));
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
  });

  it('gives every case study a metric, problem, approach, result, and technologies', () => {
    for (const c of caseStudies) {
      expect(c.metric.value, c.id).toBeTruthy();
      expect(c.metric.label, c.id).toBeTruthy();
      expect(c.problem, c.id).toBeTruthy();
      expect(c.approach.length, c.id).toBeGreaterThanOrEqual(3);
      expect(c.result, c.id).toBeTruthy();
      expect(c.technologies.length, c.id).toBeGreaterThan(0);
    }
  });
});
