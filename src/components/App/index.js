import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled';
import { theme } from './theme';

const TestingFont = styled.h1`
  ${props => props.theme.bold20px}
  ${props => props.theme.textShadow1}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <TestingFont>Opa fion</TestingFont>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
