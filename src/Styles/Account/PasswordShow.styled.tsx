import styled, { css } from 'styled-components';

export const StyledPasswordShow = styled.div`
  ${({ theme }) => css`
    position: absolute;
    padding: 10px 10px 8px 10px;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);

    &:hover {
      cursor: pointer;
    }
  `}
`;
