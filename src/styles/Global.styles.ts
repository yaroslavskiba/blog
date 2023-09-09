import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 1.5;
    color: ${(props) => props.theme.colors.articleTextColor};
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }
  html input,
  html textarea,
  body input,
  body textarea {
    outline: none;
  }
  html *,
  body * {
    font-family: 'Atkinson Hyperlegible', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }
  html a,
  html a:active,
  html a:focus,
  body a,
  body a:active,
  body a:focus {
    text-decoration: none;
    outline: none;
  }
  html a:active,
  body a:active {
    color: ${(props) => props.theme.colors.linkColor};
  }
  html a:visited,
  html a:hover,
  body a:visited,
  body a:hover {
    text-decoration: none;
  }
  html nav,
  html footer,
  html header,
  html aside,
  body nav,
  body footer,
  body header,
  body aside {
    display: block;
  }
  html button,
  body button {
    background-color: inherit;
    cursor: pointer;
  }
  html button::-moz-focus-inner,
  body button::-moz-focus-inner {
    padding: 0;
    margin: 0;
    border: 0;
  }
  html ul li,
  body ul li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  form {
    max-width: none;
  }
  hr {
    height: 3px;
    width: 100%;
    margin: 15px auto;
    background-color: ${(props) => props.theme.colors.DelemiterColor};
  }
  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
