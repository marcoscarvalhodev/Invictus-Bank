import styled, { css } from 'styled-components';
import GiftStrap from '../../../assets/svg/rewards/strap.svg?url';

export const StyledRewardsGift = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100vw;
    height: 200vh;

    .container-gift {
      height: 30vh;
      width: 60vh;
      top: 50vh;
      left: 50vw;
      transform: translate(-50%, -50%);
      position: absolute;
      perspective: 1000px;
    }

    .box-gift,
    .lid-gift {
      position: absolute;
      transform-style: preserve-3d;
      height: 150px;
      width: 150px;
      top: 100px;
      left: 100px;
      transform: rotateY(0deg) rotateX(-100deg) rotateZ(-230deg);
    }

    .lid-gift {
      width: 15.5rem;
      height: 15.5rem;
    }

    .lid-gift {
      top: 0px;
      left: 0px;
    }

    //gift-faces

    .face,
    .lid {
      ${theme.rewards.rewards_faces.face_default};
    }

    .face-1,
    .face-6 {
      ${theme.rewards.rewards_faces.face_1};
    }

    .face-6 {
      right: 8.95rem;
    }

    .lid-1,
    .lid-6 {
      ${theme.rewards.rewards_faces.face_1};
      width: 3rem;
    }

    .lid-1 {
      right: 14rem;
    }

    .lid-6 {
      right: 13.93rem;
    }

    .face-2,
    .face-7 {
      ${theme.rewards.rewards_faces.face_2};
    }

    .face-7 {
      left: 5.93rem;
    }

    .lid-2,
    .lid-7 {
      ${theme.rewards.rewards_faces.face_2};
      width: 3rem;
    }

    .lid-2 {
      left: 10.5rem;
    }

    .lid-7 {
      left: 10.43rem;
    }

    .face-3,
    .face-8 {
      ${theme.rewards.rewards_faces.face_3};
    }

    .face-8 {
      bottom: 8.95rem;
    }

    .lid-3,
    .lid-8 {
      ${theme.rewards.rewards_faces.face_3};
      height: 3rem;
    }

    .lid-3 {
      bottom: 14rem;
    }

    .lid-8 {
      bottom: 13.93rem;
    }

    .face-4,
    .face-9 {
      ${theme.rewards.rewards_faces.face_4};
    }

    .face-9 {
      top: 5.94rem;
      transform: rotateX(-90deg) translateY(0.5px);
    }

    .lid-4,
    .lid-9 {
      ${theme.rewards.rewards_faces.face_4};
      height: 3rem;
      top: 10.47rem;
    }

    .lid-9 {
      top: 10.43rem;
    }

    .face-5,
    .face-10 {
      ${theme.rewards.rewards_faces.face_5};
    }

    .face-10 {
      transform: translateZ(5.95rem);
    }

    .lid-5,
    .lid-10 {
      ${theme.rewards.rewards_faces.face_5};
    }

    .lid-5 {
      transform: translateZ(1.5rem);
    }

    .lid-10 {
      transform: translateZ(1.43rem);
    }

    .face-6,
    .face-7,
    .face-8,
    .face-9,
    .face-10,
    .lid-6,
    .lid-7,
    .lid-8,
    .lid-9,
    .lid-10 {
      background: #1a1b1b;
    }

    .face-7 {
      background: linear-gradient(
        -30deg,
        rgba(35, 36, 37, 1) 8%,
        rgba(92, 93, 94, 1) 100%
      );
    }

    .face-8 {
      background: linear-gradient(
        100deg,
        rgba(35, 36, 37, 1) 8%,
        rgba(92, 93, 94, 1) 100%
      );
    }

    //detail-gift

    .face-1 {
      .strap {
        ${theme.rewards.reward_straps.strap_1};
      }
    }

    .lid-1 {
      .strap {
        ${theme.rewards.reward_straps.strap_1};
        height: 3rem;
        width: 2rem;
        right: -0.6rem;
      }
    }

    .face-4 {
      .strap {
        ${theme.rewards.reward_straps.strap_2};
      }
    }

    .lid-4 {
      .strap {
        ${theme.rewards.reward_straps.strap_2};
        height: 3rem;
        width: 2rem;
      }
    }
  `}
`;
