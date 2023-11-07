import { themeAttrs } from './ThemeAttrs';
import { css } from 'styled-components';

const theme = {
  colors: {
    blue_main: {
      primary_normal: '#1B6CE7',
      primary_dark: '#155ECD',
      primary_light: '#4589F0',
      secondary_normal: '#0055D6',
      secondary_dark: '#003FA6',
      secondary_light: '#3376E3',
    },
    white_auxiliary: {
      white_normal: '#EBF3FF',
      white_dark: '#E1EBF9',
      white_light: '#F6FAFF',
    },
    black_auxiliary: {
      black_normal: '#242526',
      black_dark: '#18191A',
      black_light: '#303133',
    },
    gray_auxiliary: {
      gray_1: '#626264',
      gray_2: '#737374',
      gray_3: '#838385',
      gray_4: '#9C9C9D',
      gray_5: '#B5B5B6',
      gray_6: '#CDCDCE',
      gray_7: '#E6E6E7',
    },
    red_auxiliary: {
      red_normal: '#eb3d3d',
      red_dark: '#D03333',
      red_light: '#F05454',
    },
    green_auxiliary: {
      green_normal: '#32d957',
      green_dark: '#28bb49',
      green_light: '#50e170',
    },
    yellow_auxiliary: {
      yellow_normal: '#ffce52',
      yellow_dark: '#d9b043',
      yellow_light: '#ffd76b',
    },
    drop_shadow: `
      filter: drop-shadow(-20px 16px 20px rgba(27, 108, 231, 0.2));
    `,
  },

  containerSizes: {
    container_xl: `${themeAttrs.container.container_xl}`,
    container_l: `${themeAttrs.container.container_l}`,
    container_m: `${themeAttrs.container.container_m}`,
    container_s: `${themeAttrs.container.container_s}`,
  },

  containerHero: {
    container_xl: css`
      max-width: 100%;

      padding: 96px 24px;
      padding-right: calc(24px + 16px);
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: row;
      overflow-x: hidden;
    `,
  },

  spacing: {
    gap_1: '0.8rem',
    gap_2: '1.6rem',
    gap_3: '4.8rem',
    gap_4: '7.2rem',
    gap_5: '12.8rem',
    gap_6: '9.6rem',
  },

  boxProps: {
    flex: {
      flex_start: `
      display: flex;
      justify-content: start;
      align-items: center;
    `,
      flex_center: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
      flex_column: `
      flex-direction: column;
    `,
      flex_wrap: `
    flex-wrap: wrap;
    `,
    },
    position: {
      relative: `
    position: relative;
    `,
      hidden: `
    overflow: hidden;
    `,
    },

    flex_items: {
      flex_item_1: `
      flex: 1 1 360px;
      `,
      flex_item_2: `
      flex: 2 1 360px;
      `,
      flex_item_3: `
      flex: 3 1 360px;
      `,
      flex_item_3_mobile: `
      flex: 3 1 250px;
      `,
      flex_item_4: `
      flex: 4 1 360px;
      `,
      flex_item_5: `
      flex: 5 1 360px;
      `,
      flex_item_auto: `
      flex: 2 1 auto;
      `,
    },

    width: {
      w_auto: `
      width: auto;
      `,
      w_100: `
      width: 100%;
      `,
      w_75: `
      width: 75%;
      `,
      w_50: `
      width: 50%;
      `,
      w_25: `
      width: 25%;
      `,
    },
  },
  animations: {
    card: {
      card_normal: {
        width_card: `${themeAttrs.card.widthCard}px`,
        height_card: `${0.64 * themeAttrs.card.widthCard}px`,
      },
      card_small: {
        width_card_small: `${themeAttrs.card.widthCardSmall}px`,
        height_card_small: `${0.64 * themeAttrs.card.widthCardSmall}px`,
      },
      card_large: {
        width_card_large: `${themeAttrs.card.widthCardLarge}px`,
        height_card_large: `${0.64 * themeAttrs.card.widthCardLarge}px`,
      },

      div_card: `
    perspective: 500px;
    position: relative;
    
    `,
    },
    dropdown_wrapper: `
    background: #F6FAFF;
      padding: 1.6rem 2.4rem;
      border-radius: 1.6rem;
      box-shadow: 0px 51px 80px rgba(27, 108, 231, 0.08),
      0px 15px 24px rgba(27, 108, 231, 0.05),
      0px 6px 10px rgba(27, 108, 231, 0.04),
      0px 2.3px 3.6px rgba(27, 108, 231, 0.02);
      
      top: 4.6rem;
      left: 2.4rem;
      
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      transition: .5s ease;
      height: 0;
      
      opacity: 0;
      pointer-events: none;
    `,
    arrow_up_down: `
    animation: arrow-y .3s ease infinite alternate;
    @keyframes arrow-y {
      0% {
           transform: translate3d(0,4px,0) rotate(45deg);
         }
      100% {
           transform: translate3d(0, 4px, 0) rotate(45deg);
          }
        };
    `,
  },
};
export default theme;
