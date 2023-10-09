import { themeAttrs } from './ThemeAttrs';

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
      white_normal: '#F1F7FF',
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
    `
  },

  containerSizes: {
    container_xl: `${themeAttrs.container.container_xl}`,
    container_l: `${themeAttrs.container.container_l}`,
    container_m: `${themeAttrs.container.container_m}`,
    container_s: `${themeAttrs.container.container_s}`,
  },

  containerHero: {
    container_xl: `
      max-width: ${themeAttrs.container.container_xl};
      margin: 0 auto;
      padding: 96px 24px;
      display: flex;
      justify-content: center;
      align-items: center;
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
      width_card: `${themeAttrs.card.widthCard}px`,
      height_card: `${0.64 * themeAttrs.card.widthCard}px`,
      width_card_responsive: `${themeAttrs.card.widthCardResponsive}px`,
      height_card_responsive: `${0.64 * themeAttrs.card.widthCardResponsive}px`,
      div_card: `
    perspective: 500px;
    position: relative;
    
    `,
    },
  },
};
export default theme;
