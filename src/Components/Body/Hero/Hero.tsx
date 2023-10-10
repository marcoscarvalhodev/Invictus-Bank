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
import { ContentHero } from '../../../Contents';
import ContainerSizes from '../../../ContainerSizes';

interface HeroProps {
  activeBx: boolean;
}

const Hero = ({activeBx}: HeroProps) => {
  const { small, xsmall } = ContainerSizes();
  return (
    <StyledHero
      $small={small}
      $xsmall={xsmall}
      className={`container ${small ? 'container-small' : ''} ${activeBx ? 'hero-active-bx' : ''}`}
    >
      <div className='flex-item-1'>
        {(xsmall && (
          <>
            <StyledHeadings as='h1' $device='mobile'>
              {ContentHero.title}
            </StyledHeadings>
            <StyledTexts $size='p1' $device='mobile'>
              {ContentHero.paragraph}
            </StyledTexts>
          </>
        )) || (
          <>
            <StyledHeadings as='h1' $device='desktop'>
              {ContentHero.title}
            </StyledHeadings>
            <StyledTexts $size='p1' $device='desktop'>
              {ContentHero.paragraph}
            </StyledTexts>
          </>
        )}

        <div
          className={`flex-interact ${xsmall ? 'flex-interact-xsmall' : ''}`}
        >
          <Button />
          <a href=''>
            <AppStore className='appstore-icon'/>
          </a>
          <a href=''>
            <PlayStore className='playstore-icon'/>
          </a>
        </div>
      </div>

      <div className='flex-item-3 div-card'>
        <IconCard className='icon-card-hero dropshadow' />
        <IconMobile className='icon-mobile-hero dropshadow' />
        <IconContactless className='icon-contactless-hero dropshadow' />
        <Card xsmall={xsmall} />
      </div>

      
    </StyledHero>
  );
};

export default Hero;
