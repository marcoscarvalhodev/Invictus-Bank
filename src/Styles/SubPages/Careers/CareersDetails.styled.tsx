import styled, { css } from 'styled-components';

export const StyledCareersDetails = styled.section`
  ${({ theme }) => css`
    &&& {
      position: absolute;
      padding: 9.6rem 2.4rem;
      display: flex;
      min-height: 100%;
      gap: 3rem;
      top: 0;
      left: 0;
      background: ${theme.colors.white_auxiliary.white_light};

      .main-title {
        padding-bottom: 7.2rem;
        margin-left: -0.4rem;
      }

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
    }
  `}
`;
