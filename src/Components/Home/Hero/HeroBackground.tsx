import React from 'react';
import { StyledHeroBackground } from '../../../Styles/Home/Hero/HeroBackground.styled';
import SVGHeroSmall from '../../../assets/svg/bg-home-mobile.svg?react';
import SVGHeroLarge from '../../../assets/svg/bg-home.svg?react';
import SVGHeroExtraLarge from '../../../assets/svg/bg-home-extra-large.svg?react';


const HeroBackground = () => {
  return (
    <StyledHeroBackground className='hero-background'>
      <SVGHeroLarge className=' svg-background svg-background-desktop'/>
      <SVGHeroSmall className='svg-background svg-background-mobile'/>

      <SVGHeroExtraLarge className='svg-background svg-background-extra-desktop'/>
    </StyledHeroBackground>
  );
};

export default HeroBackground;
