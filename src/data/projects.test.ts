import { describe, it, expect } from 'vitest';
import { projects } from './projects';

describe('projects', () => {
  it('has unique ids', () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('links every project to its GitHub repo over https', () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const p of projects) {
      expect(p.github, p.id).toMatch(/^https:\/\/github\.com\/just-sampath\/[\w.-]+$/);
      if (p.demo) expect(p.demo, p.id).toMatch(/^https:\/\//);
    }
  });

  it('gives every project details, highlights, and technologies', () => {
    for (const p of projects) {
      expect(p.details.length, p.id).toBeGreaterThan(0);
      expect(p.highlights.length, p.id).toBeGreaterThanOrEqual(3);
      expect(p.technologies.length, p.id).toBeGreaterThan(0);
    }
  });
});
