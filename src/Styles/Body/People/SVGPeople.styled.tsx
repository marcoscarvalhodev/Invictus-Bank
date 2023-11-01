import styled, { css } from 'styled-components';

interface SVGPeopleProps {
  $small: boolean;
  $xsmall: boolean;
  $width: string;
  $height: string;
}

export const StyledSVGPeople = styled.svg<SVGPeopleProps>`
  ${({ theme, $small, $xsmall, $width, $height }) => css`
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
      animation: people 10s ease 2s infinite;
    }
    .people-4 {
      opacity: 0;
      animation: people 10s ease 7s infinite;
    }
    .people-5 {
      opacity: 0;
      animation: people 10s ease 3s infinite;
    }
    .people-6 {
      opacity: 0;
      animation: people 10s ease 8s infinite;
    }

    @keyframes people {
      0% {
        opacity: 0;
      }
      20%,
      50% {
        opacity: 1;
      }
      70%,
      100% {
        opacity: 0;
      }
    }

    
  `}
`;
