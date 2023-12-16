import React from 'react';
import { StyledHeroBackground } from '../../../Styles/Home/Hero/HeroBackground.styled';
import SVGHeroLarge from '../../../assets/svg/bg-home.svg?react';
import SVGHeroSmall from '../../../assets/svg/bg-home-mobile.svg?react'
import ContainerSizes from '../../../ContainerSizes';

const HeroBackground = () => {
  const {xsmall, small, medium, large, xlarge} = ContainerSizes();

  return (
    <StyledHeroBackground $small={small} $xsmall={xsmall} className='hero-background'>
      {xsmall ? <SVGHeroSmall className='svg-background'/> :<SVGHeroLarge className='svg-background'/>}
    </StyledHeroBackground>
  )
}

export default HeroBackground