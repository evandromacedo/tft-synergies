import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled';

const TestingFont = styled.h1`
  font-family: 'Beaufort';
  ${props => props.theme.sans16pxItalic}
`;

const theme = {
  // Typography
  bold12px: 'font-size: 1.2rem; font-weight: bold; letter-spacing: .5px;',
  bold16px: 'font-size: 1.6rem; font-weight: bold; letter-spacing: .5px;',
  bold20px: 'font-size: 2rem; font-weight: bold; letter-spacing: .5px;',
  sans14pxItalic:
    'font-family: sans-serif; font-size: 1.4rem; font-weight: normal; font-style: italic;',
  sans16pxItalic:
    'font-family: sans-serif; font-size: 1.6rem; font-weight: normal; font-style: italic;',

  textShadow1: '0 0 3px #000'
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TestingFont>Opa fion</TestingFont>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
