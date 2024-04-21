import styled, { css } from 'styled-components';

export const StyledCareersFormFields = styled.section`
  ${({ theme }) => css`
    &&& {
      .form {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        .submit-button {
          max-width: min-content;
        }
      }

      .input-wrapper-fields {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 4.8rem;
        .input-wrapper {
          width: 100%;
          .parent-input {
            width: 100%;
          }
        }
      }

      ${theme.media_query.above_small`
        .input-wrapper-fields {
          padding-right: 1.6rem;
        }
      `}

      ${theme.media_query.small`
        .input-wrapper-fields {
          flex-direction: column;
          gap: 3rem;
        }

      `}
    }
  `}
`;
