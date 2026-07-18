import { describe, it, expect } from 'vitest';
import { projects } from './projects';

describe('projects content (resume sync)', () => {
  it('keeps the five work-showcase project ids', () => {
    expect(projects.map((p) => p.id).sort()).toEqual(
      [
        'agentic-actions',
        'aws-infrastructure',
        'lambda-pipeline',
        'rag-optimization',
        'slack-ingestion',
      ].sort()
    );
  });

  it('aligns RAG latency story with resume (80s → 25-30s, 60%+)', () => {
    const rag = projects.find((p) => p.id === 'rag-optimization');
    expect(rag).toBeTruthy();
    // Tagline, impact, and details must share the same range (not bare "25s").
    expect(rag!.tagline).toMatch(/80s\s*→\s*25-30s/);
    expect(rag!.impact).toMatch(/80s\s*→\s*25-30s/);
    expect(rag!.impact).toMatch(/60%\+/);
    const responseTime = rag!.details.find((d) => d.label === 'Response_Time');
    expect(responseTime?.value).toMatch(/80s\s*→\s*25-30s/);
  });
});
