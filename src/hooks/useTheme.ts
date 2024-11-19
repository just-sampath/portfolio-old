import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if user has manually set a preference
    const savedPreference = localStorage.getItem('darkMode');
    
    if (savedPreference === null) {
      // Use system preference
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      // Use saved preference
      setIsDark(savedPreference === 'true');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      if (localStorage.getItem('darkMode') === null) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  return { isDark, toggleTheme };
}