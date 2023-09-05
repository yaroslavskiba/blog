import { createGlobalStyle } from 'styled-components';

export const MarkedStyles = createGlobalStyle`
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  p {
    margin-bottom: 10px;
  }

  ul,
  ol {
    margin-bottom: 10px;
    margin-left: 20px;
  }

  li {
    margin-bottom: 5px;
  }

  a {
    color: ${(props) => props.theme.color.linkColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  code {
    font-family: 'Courier New', monospace;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    padding: 2px 4px;
    border-radius: 4px;
  }

  blockquote {
    margin-left: 20px;
    padding-left: 10px;
    border-left: 2px solid #ccc;
  }
`;
