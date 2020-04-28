import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
  primary: '#34C759',
  secondary: '#FFF',
  background: '#1A1A1A',
  grays: {
    dark: '#252525',
    light: '#737373',
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={colors}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};
