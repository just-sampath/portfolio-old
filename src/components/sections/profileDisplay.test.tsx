import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Hero from './Hero';
import Footer from './Footer';
import { profile } from '../../data/profile';
import { experiences } from '../../data/experience';

afterEach(() => {
  cleanup();
});

describe('Hero profile display', () => {
  it('shows the current role and company from the experience data', () => {
    const current = experiences.find((e) => e.status === 'current')!;
    render(<Hero />);
    expect(screen.getByText(`${current.role} @ ${current.company}`)).toBeInTheDocument();
  });

  it('shows years of experience and every highlight', () => {
    render(<Hero />);
    expect(screen.getByText(`${profile.yearsOfExperience}+`)).toBeInTheDocument();
    for (const highlight of profile.highlights) {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    }
  });

  it('links the résumé', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /Résumé/i })).toHaveAttribute('href', profile.resumeUrl);
  });
});

describe('Footer profile display', () => {
  it('shows availability copy and a résumé link', () => {
    render(<Footer />);
    expect(screen.getByText(profile.availabilityBlurb)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Résumé/i })).toHaveAttribute('href', profile.resumeUrl);
  });
});
