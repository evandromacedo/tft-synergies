import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, GlobalStyle } from './styled';
import theme from './theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <h1>TFT Synergies</h1>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
