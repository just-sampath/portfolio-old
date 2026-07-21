import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ProjectsGrid from './ProjectsGrid';

afterEach(() => {
  cleanup();
});

describe('ProjectsGrid links', () => {
  it('shows GitHub and Live Demo for EMI calculator when expanded', () => {
    render(<ProjectsGrid />);

    // Expand the EMI card via its title text
    fireEvent.click(screen.getByRole('button', { name: /INDIAN_CC_EMI_CALCULATOR/i }));

    const github = screen.getByRole('link', { name: /GitHub/i });
    expect(github).toHaveAttribute(
      'href',
      'https://github.com/just-sampath/indian-credit-card-emi-calculator'
    );
    expect(github).toHaveAttribute('target', '_blank');
    expect(github).toHaveAttribute('rel', expect.stringContaining('noopener'));

    const demo = screen.getByRole('link', { name: /Live Demo/i });
    expect(demo).toHaveAttribute(
      'href',
      'https://just-sampath.github.io/indian-credit-card-emi-calculator/'
    );
  });

  it('shows GitHub only (no Live Demo) for recruiter-ai when expanded', () => {
    render(<ProjectsGrid />);

    fireEvent.click(screen.getByRole('button', { name: /RECRUITER_AI_ATS/i }));

    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute(
      'href',
      'https://github.com/just-sampath/recruiter_ai'
    );
    expect(screen.queryByRole('link', { name: /Live Demo/i })).toBeNull();
  });

  it('does not show external links for a work showcase without github/demo', () => {
    render(<ProjectsGrid />);

    fireEvent.click(screen.getByRole('button', { name: /RAG_PIPELINE_OPTIMIZER/i }));

    expect(screen.queryByRole('link', { name: /GitHub/i })).toBeNull();
    expect(screen.queryByRole('link', { name: /Live Demo/i })).toBeNull();
  });
});
