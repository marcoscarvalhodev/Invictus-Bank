import { createGlobalStyle, css } from 'styled-components';
import theme from './Styles/theme';

interface GlobalStyleProps {
  $activeBx: boolean;
  $xsmall: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  ${({ $activeBx, $xsmall }) => css`
  
    ${$activeBx &&
    `body {
      overflow: hidden; 
      
    };
  `};

    body {
      overflow-x: hidden;
      background: ${theme.colors.white_auxiliary.white_light};
     
    }

    .container {
      ${theme.containerHero.container_xl};
    }

    .container + .container {
      padding-top: 0px;
    }

    ${$xsmall &&
    css`
  .container {
    padding-bottom: 0px;

    .flex-item-3-hero {
      ${theme.boxProps.flex_items.flex_item_3_mobile};
    }

  }

  

  .container + .container {
    padding: 0px 24px ${theme.spacing.gap_6} 24px;
    
  }

  `};
  `}
`;
