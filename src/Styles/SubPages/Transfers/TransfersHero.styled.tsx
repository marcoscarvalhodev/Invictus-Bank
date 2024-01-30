import styled, { css } from 'styled-components';

interface StyledTransfersHeroProps {
  
}

export const StyledTransfersHero = styled.section<StyledTransfersHeroProps>`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_hero};

    .flex-hero-2 {
      width: 100%;
      justify-content: center;
      display: flex;

      .phone-wrapper {
        position: relative;
        width: 300px;
        height: 300px;
      }

      .phone {
        width: 200px;
        position: absolute;
        transform: translate(-50%, 0);
      }

      .phone-1 {
        left: 50%;
      }

      .phone-2 {
        z-index: -1;
        right: -180px;
        top: -20px;
      }
    }
  `}
`;