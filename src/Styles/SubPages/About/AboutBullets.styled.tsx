import styled, { css } from 'styled-components';

export const StyledAboutBullets = styled.section`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_advantages};

    &&& {
      .company-image {
        width: 60rem;
        border-radius: 0.4rem;
      }

      .flex-1 {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      .flex-1-item {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
      }

      ${theme.media_query.small`
        padding: 9.6rem 2.4rem 0rem 2.4rem;

        flex-direction: column;    
        
        .company-image {
          width: 100%;
        }
      `}

      ${theme.media_query.small`
        
        padding-top: 0rem;
      `}
    }
  `}
`;
