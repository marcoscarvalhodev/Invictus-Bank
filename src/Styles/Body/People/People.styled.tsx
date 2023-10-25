import styled, { css } from 'styled-components';
import iconCheck from '../../../assets/svg/icon-check.svg?url';

export const StyledPeople = styled.section`
  ${({ theme }) => css`
    && {
      
      .flex-item-4-people {
        ${theme.boxProps.flex_items.flex_item_4};
        flex-direction: column;
        margin-right: 30px;
      }

      .flex-item-3-people {
        ${theme.boxProps.flex_items.flex_item_3};
        flex-direction: column;
      }

      .flex-item-1-people {
        ${theme.boxProps.flex_items.flex_item_1};
        flex-direction: column;
      }

      .subtitle {
        margin-left: 0.4rem;
      }

      .people-svg {
        border-radius: 6rem;
      }

      .bullet-title {
        background: ${theme.colors.black_auxiliary.black_normal};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        font-size: 1.8rem;
        line-height: 140%;
      }

      .title {
        
        color: ${theme.colors.black_auxiliary.black_normal};
      }

      .people-list-item {
        position: relative;
        border: 1px solid red;
        padding: 0.8rem 0.8rem 0.8rem 7.2rem;
        margin-bottom: 4.8rem;

        &:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          width: 4rem;
          height: 4rem;
        }
      }

      .bg-icon-check {
        &:after {
          background-image: url(${iconCheck});
          background-size: cover;
          transition: 0.5s ease;
          cursor: pointer;
          filter: drop-shadow(0px 16px 24px rgba(27, 108, 231, 0.3));
          top: 16px;
          left: 8px;
        }

        &:hover {
          &:after {
            transform: scale(1.05);
          }
        }
      }

      .people-list {
        margin-top: ${theme.spacing.gap_3};
      }

      
    }
  `}
`;
