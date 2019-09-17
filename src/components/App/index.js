import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Layout, Wrapper, GlobalStyle } from './styled';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Meta from '../Meta';
import Header from '../Header';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Context from '../Context';

export default function App() {
  return (
    <Context>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <Meta />
            <Header />
            <Wrapper>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </Wrapper>
          </Router>
        </Layout>
      </ThemeProvider>
    </Context>
  );
}
