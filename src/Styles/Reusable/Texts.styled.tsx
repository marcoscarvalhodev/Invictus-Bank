import styled, { css } from 'styled-components';
import IconArrow from '../../assets/svg/icon-arrow.svg?url';

interface TextsProps {
  $size: 'p1' | 'p2' | 'p3' | 'p4' | 'custom';
  $link?: boolean;
  $fontSize?: number;
  $arrow?: boolean;
}

export const StyledTexts = styled.p<TextsProps>`
  ${({ theme, $size, $link, $fontSize, $arrow }) => css`
    && {
      font-family: 'Source Sans 3', sans-serif;
      color: ${theme.colors.gray_auxiliary.gray_1};
      //P1

      ${$link &&
      css`
        display: inline-block;
        color: ${theme.colors.blue_main.primary_normal};

        ${$arrow
          ? css`
              background: url(${IconArrow}) no-repeat 0% 50%;
              padding: 16px 16px 16px 40px;
            `
          : css`
              padding: 10px 12px;
            `}

        cursor: pointer;
        text-align: left;
        position: relative;
        transition: 0.5s ease;
        clear: right;
        width: max-content;
        &:after {
          content: '';
          position: absolute;
          display: block;
          top: 75%;
          left: 56px;
          width: 0%;
          transition: 0.5s ease;
          height: 2px;
          border-radius: 2px;
          background-color: ${theme.colors.blue_main.secondary_light};
        }

        &:hover {
          ${$arrow
            ? css`
                padding-left: 64px;
              `
            : css`
                padding-left: 12px;
              `}

          background-position: 8px 50%;
          &:after {
            left: 8%;
            position: absolute;
            width: 85%;
          }
        }
      `}

      ${$size === 'p1' &&
      css`
        ${theme.media_query.above_small`
          b {
            font-size: 2.4rem;
          }
          font-size: 2.4rem;
          line-height: 130%;
        `} //query-desktop

      ${theme.media_query.small`
      b {
            font-size: 1.8rem;
          }
          font-size: 1.8rem;
          line-height: 130%;
        `} //query-mobile
      `}

      //P2


${$size === 'p2' &&
      css`
        ${theme.media_query.above_small`
        b {
          font-size: 1.6rem;
        }
          font-size: 1.6rem;
          line-height: 140%;
        `} //query-desktop

      ${theme.media_query.small`
      b {
        font-size: 1.4rem;
      }
          font-size: 1.4rem;
          line-height: 150%;
        `} //query-mobile
      `}

//P3

${$size === 'p3' &&
      css`
        ${theme.media_query.above_small`
        b {
          font-size: 1.4rem;
        }
          font-size: 1.4rem;
          line-height: 150%;
        `} //query-desktop

      ${theme.media_query.small`
      b {
          font-size: 1.4rem;
        }
          font-size: 1.4rem;
          line-height: 150%;
        `} //query-mobile
      `}

      ${$size === 'p4' &&
      css`
        ${theme.media_query.above_small`
        b {
          font-size: 1.8rem;
          
        }
          font-size: 1.8rem;
          line-height: 130%;
        `} //query-desktop

      ${theme.media_query.small`
      b {
          font-size: 1.6rem;
          
        }
          font-size: 1.6rem;
          line-height: 140%;
        `} //query-mobile
      `}

      ${$fontSize &&
      css`
        font-size: ${$fontSize}px;
      `}
    }
  `}
`;
