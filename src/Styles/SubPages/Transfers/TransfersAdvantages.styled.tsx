import styled, { css } from 'styled-components';

interface StyledTransfersAdvantagesProps {}

export const StyledTransfersAdvantages = styled.section<StyledTransfersAdvantagesProps>`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_advantages};
    &&& {
      padding: 4.8rem 2.4rem 9.6rem 2.4rem;
      .laptop-mockup-wrapper {
        width: 100%;
        padding: 30px;
        .laptop-mockup {
          width: 100%;
          margin-left: -2rem;
        }
      }
    }
  `}
`;
