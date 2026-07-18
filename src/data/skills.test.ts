import { describe, it, expect } from 'vitest';
import { skillCategories } from './skills';

const allSkills = () => skillCategories.flatMap((c) => c.skills);

describe('skills content (resume sync)', () => {
  it('does not claim only 2+ years in skill descriptions', () => {
    for (const skill of allSkills()) {
      expect(skill.description).not.toMatch(/\b2\+\s*years\b/i);
    }
  });

  it('includes TypeScript, Azure Functions, Valkey, Claude, and React', () => {
    const names = allSkills().map((s) => s.name.toLowerCase().replace(/[_\s]/g, ''));
    for (const required of ['typescript', 'azurefunctions', 'valkey', 'claude', 'react']) {
      expect(names.some((n) => n.includes(required))).toBe(true);
    }
  });
});
