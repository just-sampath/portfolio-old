import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { profile } from './profile';

describe('profile', () => {
  it('uses https profile links and a plausible email', () => {
    expect(profile.github).toMatch(/^https:\/\//);
    expect(profile.linkedin).toMatch(/^https:\/\//);
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('points the résumé link at a file that ships in public/', () => {
    expect(profile.resumeUrl.startsWith('/')).toBe(true);
    expect(existsSync(resolve(process.cwd(), 'public', profile.resumeUrl.slice(1)))).toBe(true);
  });

  it('has proof-point highlights for the top of the page', () => {
    expect(profile.highlights.length).toBeGreaterThan(0);
    for (const highlight of profile.highlights) expect(highlight.length).toBeGreaterThan(0);
  });

  it('has availability copy when open to work', () => {
    if (profile.availableForWork) {
      expect(profile.availabilityLabel).toBeTruthy();
      expect(profile.availabilityBlurb).toBeTruthy();
    }
  });
});
