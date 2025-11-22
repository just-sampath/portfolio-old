import React, { useState, useEffect } from 'react';
import TerminalLayout from './components/layout/TerminalLayout';
import BootScreen from './components/ui/BootScreen';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import SkillsMatrix from './components/sections/SkillsMatrix';
import ExperienceLog from './components/sections/ExperienceLog';
import ProjectsGrid from './components/sections/ProjectsGrid';
import Footer from './components/sections/Footer';

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);
  const [activeCommand, setActiveCommand] = useState('');

  useEffect(() => {
    // Simulate boot delay or check local storage if needed
    // For now, we rely on BootScreen's onBootComplete
  }, []);

  const handleBootComplete = () => {
    setBooted(true);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveCommand(id);
    }
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