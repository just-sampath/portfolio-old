export const getInitialTheme = (): boolean => {
  // Check if theme preference is stored in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme !== null) {
    return savedTheme === 'dark';
  }
  
  // Check system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const setThemeClass = (isDark: boolean) => {
  const root = window.document.documentElement;
  root.classList.remove(isDark ? 'light' : 'dark');
  root.classList.add(isDark ? 'dark' : 'light');
};
