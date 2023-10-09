import styled, { css } from "styled-components";

interface HeroProps {
  $xsmall: boolean;
  $small: boolean;
}

export const StyledHero = styled.main<HeroProps>`
  ${({ theme, $xsmall, $small }) => css`
  ${theme.containerHero.container_xl};
  
  background: ${theme.colors.white_auxiliary.white_normal};
    
    
    &.container {
      
      padding: ${theme.spacing.gap_5} 2.4rem;
    }

    .flex-item-1 {
      ${theme.boxProps.flex_items.flex_item_1};
      
      padding: ${theme.spacing.gap_3} 0;
      p {
        margin: ${theme.spacing.gap_2} 0;
      }
    }

    .flex-interact {
      ${theme.boxProps.flex.flex_start};
      gap: ${theme.spacing.gap_2};

      .playstore-icon {
        margin-top: 5px;
        
      }
      
    }

    .flex-item-3 {
      ${theme.boxProps.flex_items.flex_item_3};
      ${theme.boxProps.flex.flex_center};
      
      padding: ${theme.spacing.gap_4} 0;
      
    }

    .div-card {
      ${theme.animations.card.div_card};
    }

    .dropshadow {
      ${theme.colors.drop_shadow};
    }

    .icon-card-hero {
      position: absolute;
      top: 0px;
      left: 300px;
      z-index: 998;
      animation: icons-hero 5s ease 0.5s infinite alternate;
    }

    .icon-contactless-hero {
      position: absolute;
      top: 330px;
      left: 350px;
      z-index: 998;
      animation: icons-hero 5s ease 1s infinite alternate;
    }

    .icon-mobile-hero {
      position: absolute;
      top: 150px;
      left: 100px;
      z-index: 998;
      animation: icons-hero 5s ease 2.5s infinite alternate;
    }

    @keyframes icons-hero {
      0% {
        transform: translate3d(0,0,0);
      }
      100% {
        transform: translate3d(10px,-40px,0);
      }
    };

    &.container-small {
      flex-direction: column;
      height: auto;

    };

    ${$small && `
    
    .icon-contactless-hero {
      left: 230px;
      top: 330px;
    }
    .icon-card-hero {
      top: 0px;
      left: 130px;
    }
    .icon-mobile-hero {
      left: 0px;
      top: 300px;
    }


    `};

    
    ${$xsmall && `
    .icon-mobile-hero, .icon-contactless-hero, .icon-card-hero {
      width: 56px;
      height: 56px;
    }

    .icon-contactless-hero {
      left: 170px;
      top: 290px;
    }
    .icon-card-hero {
      top: 40px;
      left: 100px;
    }
    .icon-mobile-hero {
      left: 0px;
      top: 270px;
    }

    .flex-interact {
      .appstore-icon, .playstore-icon {
        width: 40px;
        height: 40px;
      }
    }

    

    

    

    `};

    
    


  `}
`;
