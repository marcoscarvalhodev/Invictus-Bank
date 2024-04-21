import styled, { css } from 'styled-components';
import IconArrow from '../../assets/svg/icon-arrow-white.svg?url';

export const StyledFooter = styled.section`
  ${({ theme }) => css`
    &&& {
      height: max-content;
      width: 100vw;
      max-width: 100vw;
      background: linear-gradient(
        220.94deg,
        ${theme.colors.blue_main.primary_normal} 14.43%,
        ${theme.colors.blue_main.secondary_dark} 85.28%
      );

      .footer-wrapper {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        height: 100%;
        .logo-wrapper {
          display: flex;
          flex-direction: column;

          .logo {
            padding-bottom: 1.6rem;
            margin-bottom: 0.5rem;
            margin-left: -1.6rem;
          }

          .arrow-link {
            color: ${theme.colors.white_auxiliary.white_normal};
            background: url(${IconArrow}) no-repeat 0% -50%;

            padding: 1.6px 16px 16px 40px;
            margin-left: -0.8rem;
            text-align: center;
            &:after {
              background: ${theme.colors.white_auxiliary.white_normal};
            }
          }
        }
      }

      ${theme.media_query.small`
      .footer-wrapper {
        padding: ${theme.spacing.global_padding_sides}
      }
        
      `}

      ${theme.media_query.small_large`
      .footer-wrapper {
        ${theme.footer_data};
      }
      
    `}

    ${theme.media_query.small`
    .footer-wrapper {
      flex-direction: column;
      align-items: center;
      
      gap: ${theme.spacing.gap_3};

      ${theme.footer_data};

      .logo-wrapper {
        
        flex-basis: 0;
        padding: 0;
        padding-left: 0.5rem;
      }
    }
    
    `}
    }
  `}
`;
