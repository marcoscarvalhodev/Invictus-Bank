import { themeAttrs } from './ThemeAttrs';
import { CSSProperties } from 'styled-components';
import { css } from 'styled-components';
import { StyledObject, Styles } from 'styled-components/dist/types';

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
      filter: drop-shadow(-6px 16px 20px rgba(27, 108, 231, 0.2));
    `,
  },

  containerSizes: {
    container_xl: `${themeAttrs.container.container_xl}`,
    container_l: `${themeAttrs.container.container_l}`,
    container_m: `${themeAttrs.container.container_m}`,
    container_s: `${themeAttrs.container.container_s}`,
  },

  containerHero: {
    container_xl: function () {
      return css`
        max-width: ${theme.containerSizes.container_xl};
        width: 100%;
        padding: 96px 24px;
        padding-right: calc(24px + 16px);
        display: flex;

        flex-direction: row;
        overflow-x: hidden;
        margin: 0 auto;
      `;
    },
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
      flex_start: css`
        display: flex;
        justify-content: start;
        align-items: start;
      `,
      flex_center: css`
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

      div_card: css`
        perspective: 500px;
        position: relative;
      `,
    },
    dropdown_wrapper: css`
      background: #f6faff;
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
      transition: 0.5s ease;
      height: 0;

      opacity: 0;
      pointer-events: none;
    `,
    arrow_up_down: css`
      animation: arrow-y 0.3s ease infinite alternate;
      @keyframes arrow-y {
        0% {
          transform: translate3d(0, 4px, 0) rotate(45deg);
        }
        100% {
          transform: translate3d(0, 4px, 0) rotate(45deg);
        }
      }
    `,
  },

  bullets: {
    title: css`
      padding: 1.6rem 0rem;
    `,
    bullet_title: css`
      background: #242526;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      padding-bottom: 8px;
    `,
    list_item: css`
      position: relative;
      margin-left: 2.4rem;

      &:hover::after {
        transform: scale(1.5);
      }
    `,
    list_wrapper: css`
      display: flex;
      margin-bottom: 4.8rem;
    `,
    list: css`
      margin-top: 4.8rem;
    `,
    bullet_icons: css`
      margin-top: -10px;
    `,
  },

  sub_pages: {
    main_page: function () {
      return css`
        background: ${theme.colors.white_auxiliary.white_light};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: ${theme.containerSizes.container_xl};
        width: 100vw;
      `;
    },
    sub_pages_hero: function () {
      return css`
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        .flex-hero {
          padding-top: ${theme.spacing.gap_3};
          flex: 1;

          .title-hero {
            ${theme.bullets.title};
            margin-left: -0.4rem;
          }

          .buttons-flex-hero {
            display: flex;
            gap: 2.4rem;
            padding: 2rem 0rem;
          }
        }
        .flex-hero-1 {
          z-index: 5;
          position: relative;
        }
        .flex-hero-2 {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `;
    },
    sub_pages_slides: function () {
      return css`
        background: ${theme.colors.white_auxiliary.white_dark};
        flex-direction: column;
        min-width: 100vw;

        .title-slides {
          ${theme.bullets.title};
          margin-left: -0.4rem;
        }

        .description-slides {
          padding-bottom: 1.6rem;
        }

        .slides-wrapper {
          display: grid;
          gap: 3rem;
          width: 100%;
          grid-template-columns: 1fr 1fr 1fr 1fr;

          justify-content: start;
          .slides {
            border-radius: 0.5rem;
            flex-direction: column;
            ${theme.boxProps.flex_items.flex_item_3};
            display: flex;
            align-items: center;
            padding: 3rem;
            background: ${theme.colors.white_auxiliary.white_light};
            gap: 3rem;
            .slide-titles {
              text-align: center;
            }

            .slide-links {
              margin-top: auto;
            }
          }
          .slide-svg {
            width: 10rem;
            height: 10rem;
          }
        }
      `;
    },
    sub_pages_advantages: function () {
      return css`
        display: flex;
        gap: 3rem;
        background: ${theme.colors.white_auxiliary.white_light};

        .title-advantages {
          ${theme.bullets.title};
          margin-left: -0.4rem;
        }

        .description-advantages {
          padding-bottom: 1.6rem;
        }

        .bullet-wrapper-advantages {
          display: flex;
          align-items: center;
          padding: 1rem 0rem;
          gap: 2.4rem;
        }

        .advantages-image {
          max-width: 60rem;
          border-radius: 0.5rem;
        }

        .flex-2 {
          margin-top: 9.4rem;

          display: flex;
          align-self: center;
          justify-content: center;
          align-items: center;
        }

        .advantages-flex {
          flex: 1;
        }
      `;
    },
  },

  form: {
    login_signup: css`
      filter: drop-shadow(-10px 10px 15px rgba(56, 58, 62, 0.35));
      position: absolute;
      background: #f1f7ff;
      width: 500px;
      top: 50%;
      right: 0;
      border-radius: 40px;
      transform: translate(0, -50%);
      padding: 4.8rem 3.2rem;
      display: flex;
      flex-direction: column;
      gap: 24px;

      .title {
        margin-bottom: 1.2rem;
        margin-left: -4px;
      }

      .form {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .icon {
          width: 17px;
        }

        .email-icon {
          width: 20px;
        }

        .eye-icon {
          width: 23px;
        }
      }

      .button {
        width: max-content;
      }
    `,
  },

  checking_animation: {
    box_shadow_normal: css`
      box-shadow: 0 0 1px 10px rgba(49, 122, 233, 1),
        0 0 1px 20px rgba(49, 122, 233, 0.2),
        0 0 10px 30px rgba(49, 122, 233, 0.4);
    `,
    box_shadow_reduced: css`
      box-shadow: 0 0 1px 5px rgba(49, 122, 233, 1),
        0 0 1px 10px rgba(49, 122, 233, 0.2),
        0 0 5px 20px rgba(49, 122, 233, 0.4);
    `,
  },

  rewards: {
    rewards_faces: {
      face_default: css`
        width: 12rem;
        height: 12rem;
        background: rgb(0, 63, 166);
        border: 1px solid #041f7767;
        position: absolute;
      `,
      face_1: css`
        right: 9rem;
        transform: rotateY(-90deg);
        background: rgb(0, 63, 166);
        background: linear-gradient(
          225deg,
          rgba(0, 63, 166, 1) 59%,
          rgba(27, 108, 231, 1) 100%
        );
        border-radius: 0px 2px 2px 0px;
      `,
      face_2: css`
        left: 5.97rem;
        transform: rotateY(90deg);
        border-radius: 2px 0px 0px 2px;
        background: rgb(0, 63, 166);
        border: 1px solid #57565667;
      `,
      face_3: css`
        bottom: 8.97rem;
        transform: rotateX(90deg);
        border-radius: 0px 0px 2px 2px;
        background: rgb(0, 63, 166);
        border: 1px solid #57565667;
      `,
      face_4: css`
        top: 5.97rem;
        transform: rotateX(-90deg);
        background: rgb(0, 63, 166);
        background: linear-gradient(
          180deg,
          rgba(0, 63, 166, 1) 8%,
          rgba(27, 108, 231, 1) 100%
        );
        border-radius: 2px 2px 0px 0px;
      `,
      face_5: css`
        transform: translateZ(6rem);
        border-radius: 4px;
        background: rgb(0, 63, 166);
      `,
    },
    reward_straps: {
      strap_1: css`
        position: absolute;
        transform: translate(-50%, 50%) rotateZ(-90deg);
        height: 10rem;
        right: 2.2rem;
        bottom: 50%;
      `,
      strap_2: css`
        position: absolute;
        transform: translate(-50%, 50%) rotateZ(90deg);
        height: 10rem;
        right: 4.2rem;
        bottom: 50%;
      `,

      strap_3: css`
        position: absolute;
        transform: translate(50%, -50%) rotateZ(360deg);
        height: 10rem;
        right: 50%;
        top: calc(50% + 1rem);
      `,
      strap_4: css`
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translate(-50%, 0%) rotateZ(180deg);
        height: 10rem;
      `,
    },
  },

  coin: {
    coin_parameters: css`
      .container-coin {
        .coined {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
          animation: spinCoin 5s linear infinite;
          backface-visibility: hidden;
        }
      }

      .face-coin {
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
      }

      .front-coin {
        transform: translate3d(0, 0, 0.25rem) rotateY(0deg);
      }

      .back-coin {
        transform: rotateY(180deg) translate3d(0, 0, 0.25rem);
      }

      .side-coin {
        width: 0.64rem;
        height: 0.32rem;
        background: #f7e259;
        position: absolute;
        left: 50%;
        top: 50%;
        backface-visibility: hidden;
        border-top: #f7e259 0.32rem solid;
        border-bottom: #f7e259 0.32rem solid;
      }

      .figureSide-0,
      .figureSide-10,
      .figureSide-11,
      .figureSide-12,
      .figureSide-13,
      .figureSide-14,
      .figureSide-15,
      .figureSide-16,
      .figureSide-17,
      .figureSide-18,
      .figureSide-19 {
        background-color: #f8d548;
        border-top: #f8d548 0.5rem solid;
        border-bottom: #f8d548 0.5rem solid;
      }
    `,
  },
  media_query: {
    xsmall: (literals: TemplateStringsArray, ...args: any[]) => css`
      @media (max-width: ${themeAttrs.container.container_s}) {
        ${css(literals, ...args)}
      } //for extra small devices
    `,

    xsmall_small: (literals: TemplateStringsArray, ...args: any[]) => css`
      @media (min-width: ${themeAttrs.container.container_s}) {
        ${css(literals, ...args)}
      } //for above extra small devices
    `,
    small: (literals: TemplateStringsArray, ...args: any[]) => css`
      @media (max-width: ${themeAttrs.container.container_m}) {
        ${css(literals, ...args)}
      } //for small devices
    `,
    medium: (literals: TemplateStringsArray, ...args: any[]) => css`
      @media ((max-width: ${themeAttrs.container.container_l}) and (min-width: ${themeAttrs.container.container_m})) {
        ${css(literals, ...args)}
      } //from small (960px) to large (1140px)
    `,

    medium_large: (literals: TemplateStringsArray, ...args: any[]) => css`
      @media (min-width: ${themeAttrs.container.container_m}) {
        ${css(literals, ...args)}
      } //for above small devices
    `,

    xlarge: (literals: TemplateStringsArray, ...args: any[]) => css`
      @media (min-width: ${themeAttrs.container.container_xl}) {
        ${css(literals, ...args)}
      } //for extra large devices
    `,
    max_large: (literals: TemplateStringsArray, ...args: any[]) => css`
      @media (max-width: ${themeAttrs.container.container_l}) {
        ${css(literals, ...args)}
      } //from 0 to large (1140px)
    `,
  },
};
export default theme;
