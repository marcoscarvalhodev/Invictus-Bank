import styled, { css } from 'styled-components';

export const StyledFooterItems = styled.ul`
  ${({ theme }) => css`
    &&& {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .footer-items {
        color: ${theme.colors.white_auxiliary.white_normal};
        cursor: pointer;
        position: relative;
        padding: 1rem;

        &::after {
          display: block;
          content: '';
          bottom: 0.5rem;
          left: 1rem;
          width: 0px;
          height: 2px;
          background: ${theme.colors.white_auxiliary.white_normal};
          position: absolute;
          transition: 0.5s ease;
        }

        &:hover::after {
          width: 100%;
          transition: 0.5s ease;
        }
      }

      .footer-title {
        padding-left: 1rem;
        color: ${theme.colors.white_auxiliary.white_normal};
      }
    }

    ${theme.media_query.small`
    align-items: center;
  `}
  `}
`;
