import { createGlobalStyle } from 'styled-components';
import BeaufortRegular from '../../static/font/Beaufort-Regular.ttf';
import BeaufortBold from '../../static/font/Beaufort-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  /* Resets */
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  body {
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  input {
    outline-width: 0.3em;
    outline-color: transparent;
    -webkit-appearance: none;
    appearance: none;
    -webkit-border-radius:0;
    border-radius:0;
  }

  .input:disabled {
    background-color: transparent;
  }

  button {
    outline: none;
    cursor: pointer;
    background-color: transparent;
    margin: 0;
  }

  input,
  button {
    text-transform: inherit;
    font-family: inherit;
    letter-spacing: inherit;
    border: none;
  }

  /* Responsiveness */
  img,
  iframe,
  object,
  embed,
  video {
    height: auto;
    max-width: 100%;
  }

  /* Fonts */
  @font-face {
    font-family: 'Beaufort';
    src: url(${BeaufortRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Beaufort';
    src: url(${BeaufortBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  html {
    font-family: 'Beaufort', sans-serif;
    font-weight: bold;
    font-size: 10px;
    color: #fff;
    background-color: #121212;
  }
`;
