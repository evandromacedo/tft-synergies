import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Layout, Wrapper, GlobalStyle } from './styled';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Context from '../Context';
import Meta from '../Meta';
import Header from '../Header';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Footer from '../Footer';

export default function App() {
  return (
    <Context>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Meta />
            <Header />
            <Wrapper>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </Wrapper>
          </Layout>
          <Footer />
        </Router>
      </ThemeProvider>
    </Context>
  );
}
