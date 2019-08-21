import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Layout, GlobalStyle } from '../src/components/App/styled';
import theme from '../src/components/App/theme';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /(\.)?stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Layout>{storyFn()}</Layout>;
    </>
  </ThemeProvider>
);

addDecorator(ThemeDecorator);

configure(loadStories, module);
