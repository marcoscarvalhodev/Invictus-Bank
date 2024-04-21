import styled, { css } from 'styled-components';

export const StyledCareersTitleApply = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 7.2rem;
    .main-title {
      margin-left: -0.4rem;
    }

    .title-description {
      display: flex;
    }

    .title-button {
      width: max-content;
      padding: 1rem;
      padding-left: 0rem;
    }
  `}
`;
