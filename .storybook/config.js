import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Layout, GlobalStyle } from '../src/components/App/styled';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from '../src/components/App/theme';
import Context from '../src/components/Context';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /(\.)?stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const ThemeDecorator = storyFn => {
  return (
    <Context>
      <ThemeProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <GlobalStyle />
          <Layout>
            <Router>
              <div style={{ padding: '16px' }}>{storyFn()}</div>
            </Router>
          </Layout>
        </DndProvider>
      </ThemeProvider>
    </Context>
  );
};

addDecorator(ThemeDecorator);

configure(loadStories, module);
