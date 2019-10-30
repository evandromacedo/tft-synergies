import React from 'react';
import theme from './theme';
import isTouchDevice from '../../utils/isTouchDevice';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import SnackbarProvider from 'react-simple-snackbar';
import { Layout, Wrapper, GlobalStyle } from './styled';
import Context from '../Context';
import Header from '../Header';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Footer from '../Footer';

const DndBackend = isTouchDevice() ? TouchBackend : HTML5Backend;

export default function App() {
  return (
    <SnackbarProvider>
      <Context>
        <DndProvider backend={DndBackend}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Router>
              <Layout>
                <Header />
                <Wrapper>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                </Wrapper>
              </Layout>
              <Footer />
            </Router>
          </ThemeProvider>
        </DndProvider>
      </Context>
    </SnackbarProvider>
  );
}
