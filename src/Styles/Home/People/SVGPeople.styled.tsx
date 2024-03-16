import styled, { css } from 'styled-components';

interface SVGPeopleProps {
  $width: string;
  $height: string;
}

export const StyledSVGPeople = styled.svg<SVGPeopleProps>`
  ${({ theme, $width, $height }) => css`
    ${css`
      width: ${$width}px;
      
    `};
    .people-1 {
      opacity: 0;
      animation: people 10s ease 0s infinite;
    }
    .people-2 {
      opacity: 0;
      animation: people 10s ease 5s infinite;
    }
    .people-3 {
      opacity: 0;
      animation: people 18s ease 0s infinite;
    }
    .people-4 {
      opacity: 0;
      animation: people 18s ease 9s infinite;
    }
    .people-5 {
      opacity: 0;
      animation: people 14s ease 0s infinite;
    }
    .people-6 {
      opacity: 0;
      animation: people 14s ease 7s infinite;
    }

    @keyframes people {
      0% {
        opacity: 0;
      }
      20%,
      30% {
        opacity: 1;
      }
      70%,
      100% {
        opacity: 0;
      }
    }

    
  `}
`;
