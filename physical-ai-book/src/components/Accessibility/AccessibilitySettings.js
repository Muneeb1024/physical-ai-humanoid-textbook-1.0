import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const AccessibilitySettings = () => {
  const {
    theme,
    toggleTheme,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    highContrast,
    toggleHighContrast,
    reducedMotion,
    toggleReducedMotion
  } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const fontSizeLabels = {
    small: 'Small',
    medium: 'Medium',
    large: 'Large'
  };

  const toggleSettings = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accessibility-settings">
      <button
        className="accessibility-toggle-btn"
        onClick={toggleSettings}
        aria-label={isOpen ? "Close accessibility settings" : "Open accessibility settings"}
        aria-expanded={isOpen}
      >
        🎛️
      </button>

      {isOpen && (
        <div className="accessibility-panel" role="dialog" aria-modal="true" aria-labelledby="accessibility-settings-title">
          <h3 id="accessibility-settings-title" className="sr-only">Accessibility Settings</h3>

          <div className="accessibility-options">
            <div className="accessibility-option">
              <label htmlFor="theme-toggle">Theme:</label>
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                className="accessibility-btn"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              >
                {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>

            <div className="accessibility-option">
              <label>Font Size:</label>
              <div className="font-size-controls">
                <button
                  onClick={decreaseFontSize}
                  className="accessibility-btn"
                  aria-label="Decrease font size"
                  disabled={fontSize === 'small'}
                >
                  A-
                </button>
                <span className="font-size-display" aria-live="polite">
                  {fontSizeLabels[fontSize]}
                </span>
                <button
                  onClick={increaseFontSize}
                  className="accessibility-btn"
                  aria-label="Increase font size"
                  disabled={fontSize === 'large'}
                >
                  A+
                </button>
              </div>
            </div>

            <div className="accessibility-option">
              <label htmlFor="high-contrast-toggle">
                <input
                  type="checkbox"
                  id="high-contrast-toggle"
                  checked={highContrast}
                  onChange={toggleHighContrast}
                  className="accessibility-checkbox"
                />
                High Contrast Mode
              </label>
            </div>

            <div className="accessibility-option">
              <label htmlFor="reduced-motion-toggle">
                <input
                  type="checkbox"
                  id="reduced-motion-toggle"
                  checked={reducedMotion}
                  onChange={toggleReducedMotion}
                  className="accessibility-checkbox"
                />
                Reduced Motion
              </label>
            </div>
          </div>

          <button
            className="close-accessibility-panel"
            onClick={toggleSettings}
            aria-label="Close accessibility settings"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilitySettings;