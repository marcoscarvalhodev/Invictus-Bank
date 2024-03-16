import React from 'react';
import { StyledHeroBackground } from '../../../Styles/Home/Hero/HeroBackground.styled';
import SVGHeroLarge from '../../../assets/svg/bg-home.svg?react';
import SVGHeroSmall from '../../../assets/svg/bg-home-mobile.svg?react'
import ContainerSizes from '../../../ContainerSizes';

const HeroBackground = () => {

  return (
    <StyledHeroBackground className='hero-background'>
      <div className='svg-background'></div>
    </StyledHeroBackground>
  )
}

export default HeroBackground