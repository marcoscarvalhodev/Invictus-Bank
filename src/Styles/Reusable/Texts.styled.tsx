import styled, { css } from 'styled-components';
import IconArrow from '../../assets/svg/icon-arrow.svg?url';

interface TextsProps {
  $device: 'mobile' | 'desktop';
  $size: 'p1' | 'p2' | 'p3';
  $link?: boolean;
}

export const StyledTexts = styled.p<TextsProps>`
  ${({ theme, $size, $device, $link }) => css`
    && {
      font-family: 'Source Sans 3', sans-serif;
      color: ${theme.colors.gray_auxiliary.gray_1};
      //P1

      ${$link && css`
        display: inline-block;
        color: ${theme.colors.blue_main.primary_normal};
        background: url(${IconArrow}) no-repeat 0% 50%;
        padding: 16px 16px 16px 40px;
        text-align:justify;
        position: relative;
        transition: .5s ease;
        &:after {
          content: '';
          position: absolute;
          display: block;
          top: 75%;
          left: 56px;
          width: 0%;
          transition: .5s ease;
          height: 2px;
          border-radius: 2px;
          background-color: ${theme.colors.blue_main.secondary_light};
        }

        &:hover {
          opacity: 0.8;
          padding-left: 64px;
          background-position: 8px 50%;
          &:after {
            width: 40%;
          }
        }
        
      `}

      ${$size === 'p1' &&
      css`
        ${($device === 'desktop' &&
          css`
        font-size: 2.4rem;
        line-height: 130%;
    `) ||
        ($device === 'mobile' &&
          css`
        font-size: 1.8rem;
        line-height: 130%;
    `)}
      `}

      //P2


${$size === 'p2' &&
      css`
        ${($device === 'desktop' &&
          css`
        font-size: 1.6rem;
        line-height: 140%;
    `) ||
        ($device === 'mobile' &&
          css`
        font-size: 1.4rem;
        line-height: 150%;
    `)}
      `}

//P3

${$size === 'p3' &&
      css`
        ${($device === 'desktop' &&
          css`
        font-size: 1.4rem;
        line-height: 150%;
    `) ||
        ($device === 'mobile' &&
          css`
        font-size: 1.4rem;
        line-height: 150%;
    `)}
      `}
    }
  `}
`;
