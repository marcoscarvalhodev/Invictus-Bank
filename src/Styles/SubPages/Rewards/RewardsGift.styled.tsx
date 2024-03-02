import styled, { css } from 'styled-components';

export const StyledRewardsGift = styled.div`
  ${({ theme }) => css`
    position: absolute;

    top: 50%;

    .container-gift {
      height: 30rem;
      width: 30rem;
      top: 50%;
      left: calc(50% - 10rem);
      transform: translate(-50%, -50%);
      position: relative;
      perspective: 100rem;
    }

    .box-gift,
    .lid-gift {
      position: absolute;
      transform-style: preserve-3d;
      height: 14rem;
      width: 14rem;
      top: 10rem;
      left: 10rem;
      transform: rotateY(0deg) rotateX(-100deg) rotateZ(-230deg);
      z-index: 2;
    }

    .lid-gift {
      width: 15.5rem;
      height: 15.5rem;
      top: -6rem;
      left: 10.85rem;
      transform: rotateY(0deg) rotateX(80deg) rotateZ(-132deg) scale(1.04)
        translateZ(0px);
      z-index: 3;
      //animation: lid-move 12s linear infinite alternate;
    }

    .lid-wrapper {
      //animation: lid-wrapper-move 12s linear infinite alternate;
      position: absolute;
      top: 10rem;
      width: 30rem;
      height: 10rem;
      z-index: 3;

      .knot-gift-wrapper {
        transform: rotateY(0deg) rotateX(93deg) rotateZ(212deg)
          translateY(-3.5rem) scale(1.04) translateZ(0px);
        position: absolute;
        perspective: 1000px;
        transform-style: preserve-3d;
        height: 8rem;
        width: 9rem;
        bottom: 4.8rem;
        right: 3.6rem;

        .knot-gift {
          height: 8rem;
          width: 9rem;
          position: absolute;
        }

        .knot-gift-1 {
          transform: translateZ(1rem);
        }

        //knot-fills

        .knot-fill-wrapper {
          width: 3rem;
          height: 3rem;
          position: relative;
          
          
        }

        .knot-fill {
          width: 1rem;
          height: 1rem;

          background: #165033;
          position: absolute;

          border-top: #165033 0.32rem solid;
          border-bottom: #165033 0.32rem solid;

          position: absolute;
          /*transform: translate3d(-50%, -50%, 0) rotateY(0deg) rotateX(-90deg) rotateZ(90deg)
          translateZ(-10.5rem) translateX(-0.5rem);
          top: 12rem;
          left: 8rem;*/

          transform: translate3d(-50%, -50%, 0) rotateY(0deg) rotateX(-45deg)
            rotateZ(45deg)  translateX(-0.5rem);

          z-index: 999;
        }
      }
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
      border: none;
    }

    .lid-5 {
      transform: translateZ(1.5rem);

      &::after {
        display: block;
        content: '';
        width: calc(100% + 0.2rem);

        height: 2.6rem;
        position: absolute;
        background: #e9c924;
        transform: translate(50%, -50%);
        top: 50%;
        right: 50%;
      }

      &::before {
        display: block;
        content: '';
        height: calc(100% + 0.2rem);
        width: 2.6rem;
        position: absolute;
        background: #e9c924;
        transform: translate(50%, -50%);
        top: 50%;
        right: 50%;
      }
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
        height: 3.2rem;
        width: 2.6rem;
        right: -1.1rem;
        bottom: 50%;
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
        height: 3.2rem;
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
        height: 3.2rem;
        width: 2.6rem;
        right: 50%;
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
        height: 3.2rem;
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
        transform: rotateY(140deg) rotateX(100deg) rotateZ(75deg)
          translateZ(200px) scale(1.04);
      }
      40% {
        transform: rotateY(150deg) rotateX(50deg) rotateZ(calc(1 * 75deg))
          translateZ(200px) scale(1.04);
      }
      50% {
        transform: rotateY(140deg) rotateX(50deg) rotateZ(calc(2 * 75deg))
          translateZ(200px) scale(1.04);
      }
      60% {
        transform: rotateY(150deg) rotateX(50deg) rotateZ(calc(3 * 75deg))
          translateZ(200px) scale(1.04);
      }

      70% {
        transform: rotateY(140deg) rotateX(50deg) rotateZ(calc(4 * 75deg))
          translateZ(200px) scale(1.04);
      }

      80% {
        transform: rotateY(150deg) rotateX(50deg) rotateZ(calc(5 * 75deg))
          translateZ(200px) scale(1.04);
      }

      90% {
        transform: rotateY(140deg) rotateX(50deg) rotateZ(calc(6 * 75deg))
          translateZ(200px) scale(1.04);
      }
      100% {
        transform: rotateY(150deg) rotateX(50deg) rotateZ(calc(7 * 75deg))
          translateZ(200px) scale(1.04);
      }
    }

    @keyframes lid-wrapper-move {
      0%,
      20% {
        transform: rotate(0deg);
      }
      30% {
        transform: rotate(120deg) translateX(-25rem);
      }

      50%,
      100% {
        transform: rotate(150deg) translateX(-25rem);
      }
    }
  `}
`;
