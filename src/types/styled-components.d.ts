import 'styled-components';
import theme from "../Styles/Theme";

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}