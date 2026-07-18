import { useEffect, useState } from 'react';

/**
 * Tracks which section is in view via IntersectionObserver.
 * Returns the active section id (defaults to the first id).
 * When multiple sections intersect, picks the first in document/sectionIds order.
 */
export function useScrollSpy(sectionIds: string[], enabled: boolean): string {
  const sectionKey = sectionIds.join('|');
  const [activeId, setActiveId] = useState(() => sectionIds[0] ?? '');

  useEffect(() => {
    if (!enabled || !sectionKey) return;

    const ids = sectionKey.split('|');
    const intersecting = new Set<string>();

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const pickActive = () => {
      for (const id of ids) {
        if (intersecting.has(id)) {
          setActiveId(id);
          return;
        }
      }
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        const id = entry.target.id;
        if (entry.isIntersecting) intersecting.add(id);
        else intersecting.delete(id);
      }
      pickActive();
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [enabled, sectionKey]);

  const fallback = sectionIds[0] ?? '';
  return activeId || fallback;
}
