import styled, { css } from 'styled-components';

interface IconsProps {
  $icon?: string;
}

export const StyledIcons = styled.div<IconsProps>`
  ${({ theme }) => css`
    svg {
      transition: 0.5s ease;
      cursor: pointer;
      ${theme.colors.drop_shadow};

      &:hover {
        transform: scale(1.05);
      }
    }
  `}
`;
