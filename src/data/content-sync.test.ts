import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { profile } from './profile';
import { experiences } from './experience';

describe('content sync guards', () => {
  it('profile role is Full Stack & AI Engineer', () => {
    expect(profile.role).toBe('Full Stack & AI Engineer');
  });

  it('no experience entry claims Present except Concentrix', () => {
    for (const exp of experiences) {
      if (exp.period.includes('Present')) {
        expect(exp.id).toBe('concentrix-se2');
        expect(exp.status).toBe('current');
      }
    }
    expect(experiences.some((e) => e.id === 'concentrix-se2' && e.period.includes('Present') && e.status === 'current')).toBe(true);
  });

  it('index.html title and meta no longer brand as Backend Lead', () => {
    const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');
    expect(html).toMatch(/Full Stack &amp; AI Engineer|Full Stack & AI Engineer/);
    expect(html).not.toMatch(/Backend Lead &amp; AI Engineer/);
    expect(html).not.toMatch(/Backend Lead & AI Engineer/);
  });
});
