import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { profile } from './profile';
import { experiences } from './experience';

describe('content consistency', () => {
  it('index.html title uses the profile role', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
    expect(title).toContain(profile.role);
  });

  it('only the current role is open-ended', () => {
    for (const exp of experiences) {
      expect(exp.period.endsWith('Present')).toBe(exp.status === 'current');
    }
  });
});
