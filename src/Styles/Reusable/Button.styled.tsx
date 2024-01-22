import styled, { css } from 'styled-components';
import buttonSvg from '../../assets/svg/app-store.svg?url';

interface ButtonProps {
  $xsmall: boolean;
  $light: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  ${({ theme, $xsmall, $light }) => css`
    && {
      
      text-decoration: none;
      font-size: ${theme.spacing.gap_2};
      line-height: 140%;
      background: linear-gradient(
        221deg,
        ${theme.colors.blue_main.primary_normal} 14.43%,
        ${theme.colors.blue_main.secondary_dark}
      );

      color: ${theme.colors.white_auxiliary.white_light};
      caret-color: transparent;
      border-radius: 1.6rem;
      padding: 1.2rem 3.2rem;
      transition: 0.3s ease;
      display: inline-block;
      cursor: pointer;
      box-shadow: 0px 17px 17px rgba(27, 108, 231, 0.13),
        0px 5px 5px rgba(27, 108, 231, 0.08),
        0px 2px 2px rgba(27, 108, 231, 0.065),
        0px 7.5px 7.5px rgba(27, 108, 231, 0.045);
        

      &:hover {
        transform: translateZ(0);
        transform: scale(1.02);


        box-shadow: 0px 17px 31px rgba(27, 108, 231, 0.27),
          0px 5px 9px rgba(27, 108, 231, 0.17),
          0px 2px 4px rgba(27, 108, 231, 0.135),
          0px 5px 20px rgba(27, 108, 231, 0.1);
      }

      ${$light &&
      css`
      position:relative;
        color: ${theme.colors.blue_main.primary_normal};
        box-shadow: 0px 5px 5px rgba(27, 108, 231, 0.13),
          0px 2px 2px rgba(27, 108, 231, 0.08),
          0px 1px 1px rgba(27, 108, 231, 0.065),
          0px 3px 3px rgba(27, 108, 231, 0.045);
          background: #fff;

        &:before {
          border-radius: 1.6rem;
          transition: 0.5s ease-in-out;
          content: '';
          background: linear-gradient(
            221deg,
            ${theme.colors.blue_main.primary_normal} 14.43%,
            ${theme.colors.blue_main.secondary_dark}
          );
          background-size: cover;
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          opacity: 0;
          z-index: -999;
        }

        
        transition: 0.5s ease-in-out;

        &:hover {
          color: ${theme.colors.white_auxiliary.white_normal};
          &:before {
            opacity:1;
          }
          box-shadow: 0px 5px 10px rgba(27, 108, 231, 0.27),
            0px 2px 4px rgba(27, 108, 231, 0.17),
            0px 1px 2px rgba(27, 108, 231, 0.135),
            0px 2px 10px rgba(27, 108, 231, 0.1);
        }
      `}

      ${$xsmall &&
      css`
        font-size: 14px;
        padding: 1.2rem 2.4rem;
      `}
    }
  `}
`;
