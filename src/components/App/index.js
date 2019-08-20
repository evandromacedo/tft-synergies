import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styled';

const TestingFont = styled.h1`
  ${props => props.theme.bold20px}
  ${props => props.theme.textShadow1}
`;

const theme = {
  // Colors
  background1: '#000000',
  background2: '#121212',
  background3: '#343434',
  background4: '#979797',
  accentYellow: '#D8A75B',
  borderLevel1: {
    top: '#213042',
    bottom: '#131C26'
  },
  borderLevel2: {
    top: '#156831',
    bottom: '#0A3518'
  },
  borderLevel3: {
    top: '#1652A0',
    bottom: '#092242'
  },
  borderLevel4: {
    top: '#893088',
    bottom: '#3E143D'
  },
  borderLevel5: {
    top: '#B89D27',
    bottom: '#3A310B'
  },

  // Typography
  bold12px: 'font-size: 1.2rem; font-weight: bold; letter-spacing: .5px;',
  bold16px: 'font-size: 1.6rem; font-weight: bold; letter-spacing: .5px;',
  bold20px: 'font-size: 2rem; font-weight: bold; letter-spacing: .5px;',
  sans14px: 'font-family: sans-serif; font-size: 1.4rem; font-weight: normal;',
  sans14pxItalic:
    'font-family: sans-serif; font-size: 1.4rem; font-weight: normal; font-style: italic;',
  sans16pxItalic:
    'font-family: sans-serif; font-size: 1.6rem; font-weight: normal; font-style: italic;',
  textShadow1: 'text-shadow: 0 0 3px #000;'
};

const BorderTest = styled.div`
  width: 500px;
  height: 200px;
  border-top: 1px solid red;
  border-bottom: 1px solid white;
  background-image: linear-gradient(to bottom, red, white), linear-gradient(red, white);
  background-size: 1px 100%;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <TestingFont>Opa fion</TestingFont>
          <BorderTest>
            <TestingFont>Testando aque</TestingFont>
          </BorderTest>
        </>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
