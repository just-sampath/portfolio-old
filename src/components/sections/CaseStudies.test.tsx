import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup, within } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import CaseStudies from './CaseStudies';
import { caseStudies } from '../../data/caseStudies';

afterEach(() => {
  cleanup();
});

describe('CaseStudies', () => {
  it('renders every case study with employer, metric, problem, and result visible', () => {
    render(<CaseStudies />);

    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(caseStudies.length);

    caseStudies.forEach((study, i) => {
      const article = within(articles[i]);
      expect(article.getByRole('heading', { name: study.name })).toBeInTheDocument();
      expect(article.getByText(`@${study.employer} · ${study.role}`)).toBeInTheDocument();
      expect(article.getByText(study.metric.value)).toBeVisible();
      expect(article.getByText(study.problem)).toBeVisible();
      expect(article.getByText(study.result)).toBeVisible();
    });
  });

  it('shows the scale strip for case studies that declare stats', () => {
    render(<CaseStudies />);

    const articles = screen.getAllByRole('article');
    caseStudies.forEach((study, i) => {
      const strip = within(articles[i]).queryByRole('list', { name: 'Scale' });
      if (!study.stats) {
        expect(strip).toBeNull();
        return;
      }
      for (const stat of study.stats) {
        expect(within(strip!).getByText(stat.label)).toBeInTheDocument();
      }
    });
  });

  it('has no links, since the code is private', () => {
    render(<CaseStudies />);

    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });
});
