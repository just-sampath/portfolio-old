import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Hero from './Hero';
import Footer from './Footer';
import { profile } from '../../data/profile';

afterEach(() => {
  cleanup();
});

describe('Hero profile display', () => {
  it('shows years of experience from profile', () => {
    render(<Hero />);
    expect(screen.getByText(String(profile.yearsOfExperience) + '+')).toBeInTheDocument();
    expect(screen.queryByText('2+')).not.toBeInTheDocument();
  });

  it('shows soft availability label when availableForWork is true', () => {
    render(<Hero />);
    if (profile.availableForWork) {
      expect(screen.getByText(profile.availabilityLabel)).toBeInTheDocument();
      expect(screen.queryByText('OPEN_TO_OPPORTUNITIES')).not.toBeInTheDocument();
    }
  });
});

describe('Footer profile display', () => {
  it('shows years and soft availability copy from profile', () => {
    render(<Footer />);
    expect(
      screen.getByText(`${profile.yearsOfExperience}+ Years`)
    ).toBeInTheDocument();
    expect(screen.queryByText(/ACTIVELY_SEEKING/i)).not.toBeInTheDocument();
    expect(screen.getByText(profile.availabilityBlurb)).toBeInTheDocument();
  });
});
