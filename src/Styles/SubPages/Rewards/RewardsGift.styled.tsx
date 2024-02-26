import styled, { css } from 'styled-components';

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

    .box-gift {
      position: absolute;
      transform-style: preserve-3d;
      height: 150px;
      width: 150px;
      top: 100px;
      left: 100px;
      transform: rotateY(0deg) rotateX(-100deg) rotateZ(-230deg);
    }

    //gift-faces

    .face {
      width: 12rem;
      height: 12rem;
      background: rgb(0, 63, 166);
      border: 1px solid #041f7767;
      position: absolute;
    }

    .face-1,
    .face-6 {
      right: 9rem;
      transform: rotateY(-90deg);
      background: rgb(0, 63, 166);
      background: linear-gradient(
        225deg,
        rgba(0, 63, 166, 1) 59%,
        rgba(27, 108, 231, 1) 100%
      );
      border-radius: 0px 2px 2px 0px;
    }

    .face-6 {
      right: 8.95rem;
    }

    .face-2,
    .face-7 {
      left: 5.97rem;
      transform: rotateY(90deg);
      border-radius: 2px 0px 0px 2px;
      background: rgb(0, 63, 166);
      border: 1px solid #2e2d2d67;
    }

    .face-7 {
      left: 5.93rem;
    }

    .face-3,
    .face-8 {
      bottom: 8.97rem;
      transform: rotateX(90deg);
      border-radius: 0px 0px 2px 2px;
      background: rgb(0, 63, 166);
      border: 1px solid #2e2d2d67;
    }

    .face-8 {
      bottom: 8.95rem;
    }

    .face-4,
    .face-9 {
      top: 5.97rem;
      transform: rotateX(-90deg);
      background: rgb(0, 63, 166);
      background: linear-gradient(
        180deg,
        rgba(0, 63, 166, 1) 8%,
        rgba(27, 108, 231, 1) 100%
      );
      border-radius: 2px 2px 0px 0px;
    }

    .face-9 {
      top: 5.94rem;
      transform: rotateX(-90deg) translateY(0.5px);
    }

    .face-5,
    .face-10 {
      transform: translateZ(6rem);
      border-radius: 4px;
      background: rgb(0, 63, 166);
    }

    .face-10 {
      transform: translateZ(5.95rem);
    }

    .face-6,
    .face-7,
    .face-8,
    .face-9,
    .face-10 {
      background: #1a1b1b;
    }

    //detail-gift

    .face-1::after,
    .face-4::after {
      content: '';
      display: block;

      background-color: #ddda11;

      position: absolute;
    }

    .face-1::after {
      transform: translate(0%, 50%);
      height: 3rem;
      width: 8rem;
      right: -1px;
      bottom: 50%;
    }

    .face-4::after {
      top: -1px;
      left: 50%;
      transform: translate(-50%, 0%);

      height: 8rem;
      width: 3rem;
    }
  `}
`;
