import React from 'react';
import { StyledLazyAnimation } from '../Styles/LazyAnimation.styled';
import LogoSVG from '../assets/svg/logosb.svg?react';

const LazyAnimation = () => {
  return (
    <StyledLazyAnimation>
      <LogoSVG className='logo-suspense' />
    </StyledLazyAnimation>
  );
};

export default LazyAnimation;
