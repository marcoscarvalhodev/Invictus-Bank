import styled, { css } from 'styled-components';

export const StyledCareersFormHero = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 9.6rem;

    .careers-form-heading {
      display: flex;
      justify-content: space-between;

      .careers-form-heading-1 {
        max-width: 60rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
      }

      .careers-form-heading-2 {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-top: 0.8rem;
        .careers-form-heading-item-2 {
          display: flex;
        }
      }
    }

    .careers-form-title {
      display: flex;
      justify-content: space-between;

      .careers-form-title-1 {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
      }
    }

    ${theme.media_query.above_small`
        .careers-form-heading {
          .careers-form-heading-2 {
            margin-right: 1.6rem;
          }
        }
      `}

    ${theme.media_query.small`
        .careers-form-heading {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }
      `}
  `}
`;
