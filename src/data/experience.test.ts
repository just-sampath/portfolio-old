import { describe, it, expect } from 'vitest';
import { experiences } from './experience';

describe('experience timeline (resume sync)', () => {
  it('lists four roles newest-first with Concentrix current', () => {
    expect(experiences).toHaveLength(4);
    expect(experiences[0]).toMatchObject({
      id: 'concentrix-se2',
      role: 'Software Engineer II',
      company: 'Concentrix',
      period: '2026-01 - Present',
      status: 'current',
    });
  });

  it('marks only one current role', () => {
    expect(experiences.filter((e) => e.status === 'current')).toHaveLength(1);
  });

  it('corrects Chat Aid Team Lead to completed May–Dec 2025', () => {
    const lead = experiences.find((e) => e.id === 'chataid-lead');
    expect(lead).toMatchObject({
      role: 'Team Lead',
      company: 'Chat Aid',
      period: '2025-05 - 2025-12',
      status: 'completed',
    });
  });

  it('renames Chat Aid backend entry to Backend Lead with corrected end date', () => {
    const be = experiences.find((e) => e.id === 'chataid-be');
    expect(be).toMatchObject({
      role: 'Backend Lead',
      company: 'Chat Aid',
      period: '2025-01 - 2025-05',
      status: 'completed',
    });
  });

  it('corrects Springworks start month to July 2023', () => {
    const sw = experiences.find((e) => e.id === 'springworks');
    expect(sw?.period).toBe('2023-07 - 2024-12');
  });

  it('gives Concentrix at least four achievements with resume keywords', () => {
    const cx = experiences.find((e) => e.id === 'concentrix-se2');
    expect(cx?.achievements.length).toBeGreaterThanOrEqual(4);
    const blob = cx!.achievements.map((a) => a.text).join(' ');
    expect(blob).toMatch(/RAG/i);
    expect(blob).toMatch(/banking/i);
    expect(blob).toMatch(/Claude/i);
    expect(blob).toMatch(/Azure/i);
  });
});
