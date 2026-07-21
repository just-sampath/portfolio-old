import { describe, it, expect } from 'vitest';
import { projects } from './projects';

const EXPECTED_ORDER = [
  'rag-optimization',
  'recruiter-ai',
  'agentic-actions',
  'lambda-pipeline',
  'azure-devops-autocreate',
  'slack-ingestion',
  'aws-infrastructure',
  'emi-calculator',
] as const;

describe('projects content (resume sync + personal showcases)', () => {
  it('keeps interleaved project ids in story order', () => {
    expect(projects.map((p) => p.id)).toEqual([...EXPECTED_ORDER]);
  });

  it('aligns RAG latency story with resume (80s → 25-30s, 60%+)', () => {
    const rag = projects.find((p) => p.id === 'rag-optimization');
    expect(rag).toBeTruthy();
    expect(rag!.tagline).toMatch(/80s\s*→\s*25-30s/);
    expect(rag!.impact).toMatch(/80s\s*→\s*25-30s/);
    expect(rag!.impact).toMatch(/60%\+/);
    const responseTime = rag!.details.find((d) => d.label === 'Response_Time');
    expect(responseTime?.value).toMatch(/80s\s*→\s*25-30s/);
  });

  it('adds recruiter-ai with github and no demo', () => {
    const p = projects.find((x) => x.id === 'recruiter-ai');
    expect(p).toBeTruthy();
    expect(p!.name).toBe('RECRUITER_AI_ATS');
    expect(p!.status).toBe('completed');
    expect(p!.github).toBe('https://github.com/just-sampath/recruiter_ai');
    expect(p!.demo).toBeUndefined();
    expect(p!.highlights.length).toBeGreaterThanOrEqual(5);
    expect(p!.technologies).toEqual(
      expect.arrayContaining(['Bun', 'Hono', 'PostgreSQL', 'Qdrant', 'BullMQ'])
    );
  });

  it('adds azure-devops-autocreate with github and no demo', () => {
    const p = projects.find((x) => x.id === 'azure-devops-autocreate');
    expect(p).toBeTruthy();
    expect(p!.name).toBe('ADO_WORK_ITEM_AUTOMATION');
    expect(p!.status).toBe('completed');
    expect(p!.github).toBe(
      'https://github.com/just-sampath/azure-devops-work-item-autocreate'
    );
    expect(p!.demo).toBeUndefined();
    expect(p!.highlights.length).toBeGreaterThanOrEqual(5);
    expect(p!.technologies).toEqual(
      expect.arrayContaining(['Azure Functions', 'Node.js'])
    );
  });

  it('adds emi-calculator with github and live demo', () => {
    const p = projects.find((x) => x.id === 'emi-calculator');
    expect(p).toBeTruthy();
    expect(p!.name).toBe('INDIAN_CC_EMI_CALCULATOR');
    expect(p!.status).toBe('completed');
    expect(p!.github).toBe(
      'https://github.com/just-sampath/indian-credit-card-emi-calculator'
    );
    expect(p!.demo).toBe(
      'https://just-sampath.github.io/indian-credit-card-emi-calculator/'
    );
    expect(p!.highlights.length).toBeGreaterThanOrEqual(5);
    expect(p!.technologies).toEqual(
      expect.arrayContaining(['React', 'Vite', 'Vitest'])
    );
  });

  it('only personal showcases expose external links', () => {
    const withLinks = projects.filter((p) => p.github || p.demo);
    expect(withLinks.map((p) => p.id).sort()).toEqual(
      ['azure-devops-autocreate', 'emi-calculator', 'recruiter-ai'].sort()
    );
  });
});
