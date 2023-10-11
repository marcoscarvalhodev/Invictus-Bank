import { createGlobalStyle } from 'styled-components';
import theme from './Styles/theme';
interface GlobalStyleProps {
  $activeBx: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${({ $activeBx }) => ($activeBx ? `body {overflow: hidden; background: ${theme.colors.white_auxiliary.white_normal}; }` : '')};

  body {
  overflow-x: hidden;
  background:#f1f7ff;
  }

`;

export default GlobalStyle;
