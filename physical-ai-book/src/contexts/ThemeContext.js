import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium'); // 'small', 'medium', 'large'
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedHighContrast = localStorage.getItem('highContrast') === 'true';
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemPrefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    setFontSize(savedFontSize || 'medium');
    setHighContrast(savedHighContrast);
    setReducedMotion(savedReducedMotion || systemPrefersReducedMotion);
  }, []);

  // Apply theme and accessibility settings to document and save to localStorage
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.setAttribute('data-font-size', fontSize);
      document.documentElement.setAttribute('data-high-contrast', highContrast);
      document.documentElement.style.colorScheme = theme;

      if (highContrast) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }

      if (reducedMotion) {
        document.documentElement.classList.add('reduce-motion');
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--animation-iteration-count', '1');
      } else {
        document.documentElement.classList.remove('reduce-motion');
        document.documentElement.style.setProperty('--animation-duration', '');
        document.documentElement.style.setProperty('--animation-iteration-count', '');
      }

      localStorage.setItem('theme', theme);
      localStorage.setItem('fontSize', fontSize);
      localStorage.setItem('highContrast', highContrast);
      localStorage.setItem('reducedMotion', reducedMotion);
    }
  }, [theme, fontSize, highContrast, reducedMotion]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const increaseFontSize = () => {
    if (fontSize === 'small') setFontSize('medium');
    if (fontSize === 'medium') setFontSize('large');
  };

  const decreaseFontSize = () => {
    if (fontSize === 'large') setFontSize('medium');
    if (fontSize === 'medium') setFontSize('small');
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(prev => !prev);
  };

  const accessibilityValue = useMemo(() => ({
    theme,
    toggleTheme,
    setTheme,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    highContrast,
    toggleHighContrast,
    reducedMotion,
    toggleReducedMotion,
  }), [theme, fontSize, highContrast, reducedMotion]);

  return (
    <ThemeContext.Provider value={accessibilityValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Function to sync theme with Docusaurus theme
export const syncThemeWithDocusaurus = (docusaurusTheme) => {
  const savedTheme = localStorage.getItem('theme');
  if (!savedTheme) {
    // If no theme is saved, use Docusaurus theme as initial value
    localStorage.setItem('theme', docusaurusTheme);
  }
};