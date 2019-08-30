import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Layout, Wrapper, GlobalStyle } from './styled';
import theme from './theme';
import Meta from '../Meta';
import Header from '../Header';
import ClassOrOrigin from '../ClassOrOrigin/';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Meta />
          <Header />
          <Wrapper>
            <ClassOrOrigin icon={'teste'} name="asd" />
          </Wrapper>
        </Layout>
      </ThemeProvider>
    </>
  );
}
