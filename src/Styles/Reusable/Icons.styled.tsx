import styled, { css } from 'styled-components';

interface IconsProps {
  $icon?: string;
}

export const StyledIcons = styled.div<IconsProps>`
  ${({ theme }) => css`
    svg {
      transition: 0.5s ease;
      cursor: pointer;
      filter: drop-shadow(-16px 16px 24px rgba(27, 108, 231, 0.25));
      
      &:hover {
          transform: scale(1.05);
        }
    }
  `}
`;
