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
///////////////////////////
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

export default function App() {
  function is_touch_device() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function(query) {
      return window.matchMedia(query).matches;
    };

    if (
      'ontouchstart' in window ||
      (window.DocumentTouch && document instanceof 'DocumentTouch')
    ) {
      return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
  }

  const isTouchDevice = is_touch_device();
  const backend = isTouchDevice ? TouchBackend : HTML5Backend;

  return (
    <Context>
      <DndProvider backend={backend}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router>
            <Layout>
              <Meta />
              <Header />
              <Wrapper>
                <button onClick={() => console.log(is_touch_device())}>
                  AAAAAAAAAAAAAAAAAAAAAAAA
                </button>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
              </Wrapper>
            </Layout>
            <Footer />
          </Router>
        </ThemeProvider>
      </DndProvider>
    </Context>
  );
}
