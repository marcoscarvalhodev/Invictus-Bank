import styled, { css } from 'styled-components';

interface eachKnotFillProps {
  maxNum: number;
  minNum: number;
  ryEach: number;
  ryWrapper: number;
  txWrapper: number;
  tzWrapper: number;
  tzEach: number;
  tyWrapper?: number;
}

function eachKnotFill({
  tzWrapper,
  txWrapper,
  ryEach,
  tzEach,
  ryWrapper,
  maxNum,
  minNum,
  tyWrapper,
}: eachKnotFillProps) {
  let knotFill = '';

  for (let i = minNum; i < maxNum; i++) {
    knotFill += `

    .knot-fill-wrapper-${i} {
      
      transform: translateZ(${tzWrapper}rem) translateX(${txWrapper}rem) translateY(${
      tyWrapper ? tyWrapper : 5.9
    }rem) rotateY(${ryWrapper}deg) ;
      transform-style: preserve-3d;
    }

      .knot-fill-${i} {
        width: 0.5rem;
        height: 1rem;
        background: #e9c924;
        position: absolute;
        
        top: 50%;
        
        
        border-left: #e9c924 0.32rem solid;
        border-right: #e9c924 0.32rem solid;

        transform: translate3d(50%, -50%, 0) rotateY(calc(${i} * ${ryEach}deg)) rotateX(360deg)
          rotateZ(148deg) translateZ(${tzEach}rem) rotate(32deg);
      }
    `;
  }

  return `
    ${knotFill}
  `;
}

interface StyledRewardsGiftProps {
  $small: boolean;
}

export const StyledRewardsGift = styled.div<StyledRewardsGiftProps>`
  ${({ theme, $small }) => css`
    position: relative;

    ${$small
      ? css`
          top: -100%;
        `
      : css`
          top: 50%;
        `}

    .container-gift {
      height: 30rem;
      width: 30rem;

      ${$small
        ? css`
            transform: translate(-50%, 0%);
            left: calc(50% + -4rem);
            
          `
        : css`
            transform: translate(-50%, -50%);
            left: calc(50%);
            top: calc(-50% + 2rem);
          `}

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

    //shadow-box

    .box-gift {
      .shadow-box {
        width: 35rem;
        height: 35rem;
        position: absolute;
        transform: translate(-50%, -50%) translateZ(8rem) translateY(-6rem);
        top: 50%;
        left: 50%;
      }
    }

    .lid-gift {
      width: 15.5rem;
      height: 15.5rem;
      top: -6rem;
      left: 10.85rem;
      transform: rotateY(0deg) rotateX(80deg) rotateZ(-131.5deg) scale(1.04)
        translateZ(0rem);
      z-index: 10;

      ${$small
        ? css`
            left: 10.95rem;
          `
        : css`
            animation: lid-move 12s linear infinite alternate;
          `};

      //shadow-lid

      ${$small
        ? css``
        : css`
            .shadow-lid-wrapper {
              width: 25rem;
              height: 25rem;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(calc(-50% + -2rem), calc(-50% + -2rem))
                translateZ(8rem) rotate(90deg);
              animation: shadow-lid 12s linear infinite alternate;
              .shadow-lid {
                width: 100%;
                height: 100%;
              }
            }
          `};
    }

    .lid-wrapper {
      ${$small
        ? css``
        : css`
            animation: lid-wrapper-move 12s linear infinite alternate;
          `};
      position: relative;
      top: 10rem;
      width: 30rem;
      height: 10rem;
      z-index: 3;

      //knot-gift

      .knot-gift-wrapper {
        transform: rotateY(0deg) rotateX(93deg) rotateZ(212deg)
          translateY(-3.5rem) scale(1.04) translateZ(0px);
        position: absolute;
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
      }
    }

    //knot-fills

    ${eachKnotFill({
      maxNum: 8,
      minNum: 0,
      ryEach: -6,
      ryWrapper: 25,
      txWrapper: 7.2,
      tzWrapper: 0.65,
      tzEach: 1.8,
      tyWrapper: 6,
    })} //upper-1

  ${eachKnotFill({
      maxNum: 20,
      minNum: 9,
      ryEach: -5,
      ryWrapper: 50,
      txWrapper: -0.2,
      tzWrapper: -0.8,
      tzEach: 0.9,
      tyWrapper: 6,
    })} //upper-2

${eachKnotFill({
      maxNum: 51,
      minNum: 21,
      ryEach: 1,
      ryWrapper: 23.5,
      txWrapper: 5.2,
      tzWrapper: -1,
      tzEach: 4.5,
      tyWrapper: 6,
    })}//side-exterior-1


${eachKnotFill({
      maxNum: 82,
      minNum: 52,
      ryEach: 0.4,
      ryWrapper: -90,
      txWrapper: 5.3,
      tzWrapper: 5.2,
      tzEach: 13,
      tyWrapper: 6,
    })}//side-exterior-2

${eachKnotFill({
      maxNum: 113,
      minNum: 83,
      ryEach: 0.7,
      ryWrapper: -20,
      txWrapper: -2.4,
      tzWrapper: 1.5,
      tzEach: 8,
      tyWrapper: 6,
    })}//side-interior-2

${eachKnotFill({
      maxNum: 144,
      minNum: 114,
      ryEach: 0.7,
      ryWrapper: -148,
      txWrapper: -1.8,
      tzWrapper: 4.8,
      tzEach: 6,
      tyWrapper: 6,
    })}//side-interior-1

    ${eachKnotFill({
      maxNum: 148,
      minNum: 145,
      ryEach: -3,
      ryWrapper: 75,
      txWrapper: 0.3,
      tzWrapper: -8.8,
      tzEach: 5,
      tyWrapper: 6,
    })}//inferior-middle

${eachKnotFill({
      maxNum: 155,
      minNum: 149,
      ryEach: -10,
      ryWrapper: 155,
      txWrapper: -12.35,
      tzWrapper: -0.6,
      tzEach: -1,
      tyWrapper: 6,
    })}//inferior-corner-2


${eachKnotFill({
      maxNum: 162,
      minNum: 156,
      ryEach: -10,
      ryWrapper: 65,
      txWrapper: 5.15,
      tzWrapper: -4,
      tzEach: -1,
      tyWrapper: 6,
    })}//inferior-corner-1

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
        height: 3.2rem;
        width: 2.6rem;
      }
    }

    .lid-1,
    .lid-2,
    .lid-3,
    .lid-4,
    .lid-5 {
      background: linear-gradient(
        50deg,
        rgba(0, 63, 166, 1) 8%,
        rgba(27, 108, 231, 1) 100%
      );
    }

    .lid-3,
    .lid-2 {
      background: rgba(27, 108, 231, 1);
    }

    //animations

    @keyframes shadow-lid {
      0%,
      38% {
        transform: translate(calc(-50% + -2rem), calc(-50% + -1rem))
          translateZ(8rem) rotate(90deg) scale(0.7);
        opacity: 0;
      }

      50% {
        transform: translate(calc(-50% + -2rem), calc(-50% + -2rem))
          translateZ(6rem) rotate(90deg) scale(1);
        opacity: 1;
      }

      100% {
        transform: translate(calc(-50% + -2rem), calc(-50% + -2rem))
          translateZ(6rem) rotate(90deg) scale(1);
        opacity: 1;
      }
    }

    @keyframes lid-move {
      0%,
      10% {
        transform: rotateY(0deg) rotateX(80deg) rotateZ(-131.5deg) scale(1.04)
          translateZ(0px);
      }

      20% {
        transform: rotateY(0deg) rotateX(90deg) rotateZ(-131.5deg)
          translateZ(7rem) scale(1.04);
      }

      30% {
        transform: rotateY(120deg) rotateX(180deg) rotateZ(75deg)
          translateZ(5rem) scale(1.04);
      }
      40% {
        transform: rotateY(120deg) rotateX(50deg) rotateZ(calc(1 * 75deg))
          translateZ(13rem) scale(1.04);
      }
      50% {
        transform: rotateY(130deg) rotateX(60deg) rotateZ(calc(2 * 75deg))
          translateZ(19rem) scale(1.04);
      }
      60% {
        transform: rotateY(120deg) rotateX(50deg) rotateZ(calc(3 * 75deg))
          translateZ(20rem) scale(1.04);
      }

      70% {
        transform: rotateY(130deg) rotateX(70deg) rotateZ(calc(4 * 75deg))
          translateZ(20rem) scale(1.04);
      }

      80% {
        transform: rotateY(120deg) rotateX(60deg) rotateZ(calc(5 * 75deg))
          translateZ(20rem) scale(1.04);
      }

      90% {
        transform: rotateY(130deg) rotateX(50deg) rotateZ(calc(6 * 75deg))
          translateZ(20rem) scale(1.04);
      }
      100% {
        transform: rotateY(130deg) rotateX(50deg) rotateZ(calc(7 * 75deg))
          translateZ(20rem) scale(1.04);
      }
    }

    @keyframes lid-wrapper-move {
      0%,
      20% {
        transform: rotate(0deg);
      }
      30% {
        transform: rotate(140deg) translateX(-25rem);
      }

      100% {
        transform: rotate(150deg) translateX(-25rem);
      }
    }
  `}
`;
