import React, { useState, useEffect, useRef, useReducer } from 'react';
import TerminalLayout from './components/layout/TerminalLayout';
import BootScreen from './components/ui/BootScreen';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import SkillsMatrix from './components/sections/SkillsMatrix';
import ExperienceLog from './components/sections/ExperienceLog';
import ProjectsGrid from './components/sections/ProjectsGrid';
import Footer from './components/sections/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'contact'];
/** Fallback if the spy never reports the clicked target. */
const MANUAL_NAV_MS = 2500;

type PinAction =
  | { type: 'pin'; id: string }
  | { type: 'clear' }
  | { type: 'spy'; section: string };

/** Pin is released only by: spy reaching the target, explicit clear, or fallback timer. */
function navPinReducer(pin: string | null, action: PinAction): string | null {
  switch (action.type) {
    case 'pin':
      return action.id;
    case 'clear':
      return null;
    case 'spy':
      // Arrive at target → release pin (no setTimeout race / cancelled cleanup).
      if (pin !== null && pin === action.section) return null;
      return pin;
    default:
      return pin;
  }
}

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);
  const spiedSection = useScrollSpy(SECTION_IDS, booted);
  const [manualNavId, dispatchPin] = useReducer(navPinReducer, null);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep pin in sync with scroll-spy: release when the target is visible.
  useEffect(() => {
    dispatchPin({ type: 'spy', section: spiedSection });
  }, [spiedSection]);

  // If pin was released by spy, drop any pending fallback timer.
  useEffect(() => {
    if (manualNavId !== null) return;
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  }, [manualNavId]);

  useEffect(() => {
    return () => {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, []);

  // While pinned and spy has not arrived yet, keep header on the clicked section.
  const activeCommand =
    manualNavId !== null && manualNavId !== spiedSection
      ? manualNavId
      : spiedSection;

  const handleBootComplete = () => {
    setBooted(true);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    dispatchPin({ type: 'pin', id });

    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    fallbackTimerRef.current = setTimeout(() => {
      dispatchPin({ type: 'clear' });
      fallbackTimerRef.current = null;
    }, MANUAL_NAV_MS);

    element.scrollIntoView({ behavior: 'smooth' });
  };

  if (!booted) {
    return <BootScreen onBootComplete={handleBootComplete} />;
  }

  return (
    <TerminalLayout>
      <Header activeCommand={activeCommand} scrollTo={scrollTo} />

      <div className="pt-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1600px] mx-auto pb-20">
        <Hero />
        <SkillsMatrix />
        <ExperienceLog />
        <ProjectsGrid />
        <Footer />
      </div>
    </TerminalLayout>
  );
};

export default App;
