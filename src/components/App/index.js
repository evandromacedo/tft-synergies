import React from 'react';
import { Layout, Wrapper, GlobalStyle } from './styled';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { getChampions } from '../../API';
// import useSynergies from '../../data';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import Meta from '../Meta';
import Header from '../Header';
import Home from '../../pages/Home';
import About from '../../pages/About';

export default function App() {
  // const { state, addChampion } = useSynergies();

  return (
    <>
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
    </>
  );
}
