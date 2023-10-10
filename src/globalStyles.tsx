import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  $activeBx: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${({ $activeBx }) => ($activeBx ? 'body {overflow: hidden; }' : '')};


`;

export default GlobalStyle;
