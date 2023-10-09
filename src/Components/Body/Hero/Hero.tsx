import React from 'react';
import { StyledHero } from '../../../Styles/Body/Hero/Hero.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Button from '../../Reusable/Button';
import AppStore from '../../../assets/svg/appstore.svg?react';
import PlayStore from '../../../assets/svg/playstore.svg?react';
import IconCard from '../../../assets/svg/icon-card.svg?react';
import IconMobile from '../../../assets/svg/icon-mobile.svg?react';
import IconContactless from '../../../assets/svg/icon-contactless.svg?react';
import Card from './Card';

interface HeroProps {
  small: boolean | null;
  xsmall: boolean | null;
}

const Hero = ({ small, xsmall }: HeroProps) => {
  return (
    <StyledHero $small={small} $xsmall={xsmall} className={`container ${small ? 'container-small' : ''}`}>
      <div className='flex-item-1'>
        <StyledHeadings as='h1' $device='desktop'>
          Welcome to Supreme Bank: Your financial future starts here.
        </StyledHeadings>
        <StyledTexts $size='p1' $device='desktop'>
          High-yield savings account, credit card with no annual or joining fee,
          and the best: set up everything from the App.
        </StyledTexts>

        <div className='flex-interact'>
          <Button />
          <a href=''>
            <AppStore />
          </a>
          <a href=''>
            <PlayStore />
          </a>
        </div>
      </div>

      <div className='flex-item-3 div-card'>
        <IconCard className='icon-card-hero dropshadow'/>
        <IconMobile className='icon-mobile-hero dropshadow'/>
        <IconContactless className='icon-contactless-hero dropshadow'/>
        <Card xsmall={xsmall}/>
      </div>
    </StyledHero>
  );
};

export default Hero;
