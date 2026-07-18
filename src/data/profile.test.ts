import { describe, it, expect } from 'vitest';
import { profile } from './profile';

describe('profile content (resume sync)', () => {
  it('uses Full Stack & AI Engineer as the headline role', () => {
    expect(profile.role).toBe('Full Stack & AI Engineer');
  });

  it('exposes 3 years of experience for UI badges', () => {
    expect(profile.yearsOfExperience).toBe(3);
  });

  it('keeps a soft availability signal without aggressive seeking language', () => {
    expect(profile.availableForWork).toBe(true);
    expect(profile.availabilityLabel).toBeTruthy();
    expect(profile.availabilityLabel.toLowerCase()).not.toMatch(/actively.?seeking/);
    expect(profile.availabilityBlurb.toLowerCase()).not.toMatch(/actively.?seeking/);
    expect(profile.availabilityBlurb.length).toBeGreaterThan(40);
  });

  it('preserves contact identity fields', () => {
    expect(profile.name).toBe('YELLAPANTHULA SAI SAMPATH');
    expect(profile.email).toBe('ysampath36@gmail.com');
    expect(profile.github).toBe('https://github.com/just-sampath');
    expect(profile.linkedin).toBe('https://linkedin.com/in/just-sampath');
  });
});
