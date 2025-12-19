import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';

// Docusaurus theme wrapper to provide theme context to the entire app
const Root = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Root;