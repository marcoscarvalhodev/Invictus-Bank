import styled, { css } from 'styled-components';

export const StyledRewardsGift = styled.div`
  ${({ theme }) => css`
    position: absolute;

    top: 50%;

    .container-gift {
      height: 300px;
      width: 300px;
      top: 50%;
      left: calc(50% - 100px);
      transform: translate(-50%, -50%);
      position: relative;
      perspective: 1000px;
    }

    .box-gift,
    .lid-gift {
      position: absolute;
      transform-style: preserve-3d;
      height: 14rem;
      width: 14rem;
      top: 100px;
      left: 100px;
      transform: rotateY(0deg) rotateX(-100deg) rotateZ(-230deg);
      z-index: 2;
    }

    .lid-gift {
      width: 15.5rem;
      height: 15.5rem;
      top: -6rem;
      left: 10.85rem;
      transform: rotateY(0deg) rotateX(80deg) rotateZ(-131.5deg) scale(1.04);
      z-index: 3;
      animation: lid-move 10s linear infinite alternate;
    }

    .lid-wrapper {
      animation: lid-wrapper-move 10s linear infinite alternate;
      position: absolute;
      top: 100px;
      width: 30rem;
      height: 10rem;
      z-index: 3;
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

    .face-1 {
      right: 8rem;
    }

    .face-6 {
      right: 7.95rem;
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

    .face-3 {
      bottom: 8rem;
    }

    .face-8 {
      bottom: 7.95rem;
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
        height: 3.1rem;
        width: 2.6rem;
        right: -1rem;
        bottom: calc(50% );
      }
    }

    .face-2 {
      .strap {
        ${theme.rewards.reward_straps.strap_2};
      }
    }

    .lid-2 {
      .strap {
        ${theme.rewards.reward_straps.strap_2};
        height: 3rem;
        width: 2.6rem;
        right: calc(-50% + 0.1rem);
        bottom: 50%;
      }
    }

    .face-3 {
      .strap {
        ${theme.rewards.reward_straps.strap_3};
      }
    }

    .lid-3 {
      .strap {
        ${theme.rewards.reward_straps.strap_3};
        height: 3rem;
        width: 2.6rem;
        right: calc(50% + -0.1rem);
        top: calc(50% + -0.1rem);
      }
    }

    .face-4 {
      .strap {
        ${theme.rewards.reward_straps.strap_4};
      }
    }

    .lid-4 {
      .strap {
        ${theme.rewards.reward_straps.strap_4};
        height: 3rem;
        width: 2.6rem;
      }
    }

    //animations

    @keyframes lid-move {
      0%,
      10% {
        transform: rotateY(0deg) rotateX(80deg) rotateZ(-131.5deg) scale(1.04)
          translateZ(0px);
      }

      20% {
        transform: rotateY(0deg) rotateX(100deg) rotateZ(-131.5deg)
          translateZ(70px) scale(1.04);
      }

      30% {
        transform: rotateY(20deg) rotateX(100deg) rotateZ(90deg)
          translateZ(200px) scale(1.04);
      }
      35% {
        transform: rotateY(40deg) rotateX(50deg) rotateZ(-30deg)
          translateZ(200px) scale(1.04);
      }
      40% {
        transform: rotateY(80deg) rotateX(50deg) rotateZ(60deg)
          translateZ(200px) scale(1.04);
      }
      45% {
        transform: rotateY(100deg) rotateX(50deg) rotateZ(-70deg)
          translateZ(200px) scale(1.04);
      }

      50% {
        transform: rotateY(120deg) rotateX(50deg) rotateZ(30deg)
          translateZ(200px) scale(1.04);
      }
      55% {
        transform: rotateY(140deg) rotateX(50deg) rotateZ(-100deg)
          translateZ(200px) scale(1.04);
      }
      60% {
        transform: rotateY(100deg) rotateX(50deg) rotateZ(0deg)
          translateZ(200px) scale(1.04);
      }
      65% {
        transform: rotateY(0deg) rotateX(50deg) rotateZ(-80deg)
          translateZ(200px) scale(1.04);
      }

      70% {
        transform: rotateY(20deg) rotateX(50deg) rotateZ(-10deg)
          translateZ(200px) scale(1.04);
      }

      75% {
        transform: rotateY(50deg) rotateX(50deg) rotateZ(90deg)
          translateZ(200px) scale(1.04);
      }

      80% {
        transform: rotateY(70deg) rotateX(50deg) rotateZ(-30deg)
          translateZ(200px) scale(1.04);
      }
      85% {
        transform: rotateY(100deg) rotateX(50deg) rotateZ(100deg)
          translateZ(200px) scale(1.04);
      }

      90% {
        transform: rotateY(130deg) rotateX(50deg) rotateZ(0deg)
          translateZ(200px) scale(1.04);
      }

      95% {
        transform: rotateY(100deg) rotateX(50deg) rotateZ(-60deg)
          translateZ(200px) scale(1.04);
      }
      100% {
        transform: rotateY(50deg) rotateX(50deg) rotateZ(50deg)
          translateZ(200px) scale(1.04);
      }
    }

    @keyframes lid-wrapper-move {
      0%,
      20% {
        transform: rotate(0deg);
      }
      30% {
        transform: rotate(120deg) translateX(-100px);
      }

      50%,
      100% {
        transform: rotate(120deg) translateX(-100px);
      }
    }
  `}
`;
