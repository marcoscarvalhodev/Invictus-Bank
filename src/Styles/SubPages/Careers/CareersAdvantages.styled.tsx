import styled, { css } from 'styled-components';

export const StyledCareersAdvantages = styled.section`
  ${({ theme }) => css`
    && {
      ${theme.sub_pages.sub_pages_advantages};
      height: max-content;

      .advantages-flex {
        padding: 4.8rem 0rem;
      }

      .flex-2 {
        justify-content: end;
      }

      .flex-1 {
        position: relative;
      }

      //input

      .parent-input {
        border-radius: 0.4rem;
        position: relative;
        margin-left: -0.2rem;
        .input {
          width: 93%;
          border-radius: 20px;
        }

        .careers-search {
          position: absolute;
          transform: translate(-50%, -50%);
          top: 50%;
          right: -1.8rem;
          padding: 1rem;
          transition: ease 0.7s;
          scale: 0.95;
          &:hover {
            cursor: pointer;

            scale: 1;
          }
          width: 40px;
          height: 40px;
        }
      }

      //jobs-list

      .jobs-list-wrapper::-webkit-scrollbar {
        width: 1.8rem;
      }

      .jobs-list-wrapper::-webkit-scrollbar-thumb {
        background: #aecbfa;
        border-left: 0.4rem solid ${theme.colors.white_auxiliary.white_dark};
        border-right: 0.4rem solid ${theme.colors.white_auxiliary.white_dark};
      }

      .jobs-list-wrapper::-webkit-scrollbar-track {
        background: ${theme.colors.white_auxiliary.white_dark};
      }

      .jobs-list-wrapper {
        width: 100%;
        max-height: 20rem;
        overflow-y: scroll;
        
        position: absolute;
        margin-top: 2.4rem;
        border: 3px solid #aecbfa;
        box-shadow: 0 0 0 5px $#88b1f1;
        transition: ease 1s;
        border-radius: 0.4rem;
        .jobs-list {
          border-bottom: solid 1px ${theme.colors.black_auxiliary.black_normal};
          background: ${theme.colors.white_auxiliary.white_dark};
          padding: 1.5rem 1rem;
          transition: ease 0.7s;
          overflow: visible;
          &:hover {
            transition: ease 0.7s;
            background: #aecbfa;
            cursor: pointer;
          }
        }

        .jobs-list:last-child {
          border: 0rem;
        }
      }

      .jobs-list-wrapper-active {
        transition: ease 1s;
        opacity: 1;
        pointer-events: all;
      }

      .jobs-list-wrapper-disabled {
        transition: ease 1s;
        opacity: 0;
        pointer-events: none;
        border: 0rem;

        .jobs-list {
          border: 0rem;
        }
      }

      //no-jobs-found

      .no-jobs-wrapper {
        width: 100%;
        position: absolute;
        margin-top: 2.4rem;
      }

      .jobs-found {
        opacity: 0;
        pointer-events: none;
      }

      .no-jobs-found {
        opacity: 1;
        pointer-events: all;
        transition: ease 1s;
      }
    }
  `}
`;
