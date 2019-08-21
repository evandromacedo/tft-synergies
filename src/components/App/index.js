import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Inner, GlobalStyle } from './styled';
import theme from './theme';
import Meta from '../Meta';
import Header from '../Header';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Meta />
          <Header />
          <Inner></Inner>
        </Container>
      </ThemeProvider>
    </>
  );
}
