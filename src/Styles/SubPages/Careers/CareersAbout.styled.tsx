import styled, { css } from 'styled-components';

export const StyledCareersAbout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2.4rem;
    background: ${theme.colors.white_auxiliary.white_dark};
    margin-right: 1.6rem;
    padding: 3rem;
    padding-bottom: 1.5rem;
    min-width: 40rem;

    .careers-about-button {
      margin-left: -0.4rem;
      margin-top: -1.6rem;
    }

    
  `}
`;
