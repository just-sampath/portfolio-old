import { describe, it, expect } from 'vitest';
import { skillGroups } from './skills';

describe('skill groups', () => {
  it('has unique group ids and no empty groups', () => {
    const ids = skillGroups.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const group of skillGroups) expect(group.skills.length, group.id).toBeGreaterThan(0);
  });

  it('lists each skill once across all groups', () => {
    const all = skillGroups.flatMap((g) => g.skills.map((s) => s.toLowerCase()));
    expect(new Set(all).size).toBe(all.length);
  });
});
