import styled, { css } from 'styled-components';

interface StyledTransfersHeroProps {
  
}

export const StyledTransfersHero = styled.section<StyledTransfersHeroProps>`
  ${({ theme }) => css`
    ${theme.sub_pages.sub_pages_hero};
  `}
`;