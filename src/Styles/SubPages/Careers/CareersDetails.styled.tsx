import styled, { css } from 'styled-components';

export const StyledCareersDetails = styled.section`
  ${({ theme }) => css`
    &&& {
      position: absolute;
      padding: ${theme.spacing.global_padding_sides};
      display: flex;
      min-height: 100%;
      gap: 3rem;
      top: 0;
      left: 0;
      background: ${theme.colors.white_auxiliary.white_light};

      .job-details {
        display: flex;
        flex-direction: column;
        gap: 7.2rem;

        .company-details,
        .description-details,
        .bullets-details,
        .bullets-details-list {
          display: flex;
          flex-direction: column;
          gap: 2.4rem;
        }

        .bullets-details {
          .bullets-dots {
            margin-left: 2rem;
            list-style-type: disc;
            font-size: 2rem;
            color: ${theme.colors.gray_auxiliary.gray_2};
          }
        }
      }

      ${theme.media_query.small`
        
        display:flex;
        flex-direction: column;

        .careers-grid-2 {
          margin-top: 4.2rem;
        }

      `}
    }
  `}
`;
