import React from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'dark bg-gray-900 text-text-primary-dark' : 'bg-gray-50 text-text-primary'
    }`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;