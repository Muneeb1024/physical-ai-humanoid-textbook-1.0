import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Hook to synchronize theme with Docusaurus color mode
export const useDocusaurusThemeSync = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Listen for Docusaurus theme changes
    const handleThemeChange = (event) => {
      const newTheme = event.detail.theme;
      if (newTheme) {
        setTheme(newTheme);
      }
    };

    // Check for existing Docusaurus theme and sync
    if (typeof window !== 'undefined' && window.__theme) {
      const docusaurusTheme = window.__theme;
      setTheme(docusaurusTheme);
    }

    // Add event listener for theme changes
    document.addEventListener('docusaurus:theme-change', handleThemeChange);

    return () => {
      document.removeEventListener('docusaurus:theme-change', handleThemeChange);
    };
  }, [setTheme]);

  // Function to notify Docusaurus of theme changes
  const notifyDocusaurusThemeChange = (newTheme) => {
    if (typeof window !== 'undefined') {
      window.__theme = newTheme;
      try {
        localStorage.setItem('theme', newTheme);
      } catch (e) {
        console.warn('Could not save theme to localStorage', e);
      }
    }
  };

  return { currentTheme: theme, notifyDocusaurusThemeChange };
};