import React from 'react';
import { StyledDepositsHero } from '../../../Styles/SubPages/Deposits/DepositsHero.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

import Safe from '../../../assets/svg/deposits/safe.svg?react';
import SafeDoor from '../../../assets/svg/deposits/safe-door.svg?react';
import SafeShadows from '../../../assets/svg/deposits/safe-shadows.svg?react';
import ShadowWrapper from '../../../assets/svg/deposits/shadow-wrapper.svg?react';
import DoorShadowAnimation from '../../../assets/svg/deposits/door-shadow-animation.svg?react';
import Clock from '../../../assets/svg/deposits/coin-clock.svg?react';
import { ContentDeposits } from '../../../Contents';

const DepositsHero = () => {
  return (
    <StyledDepositsHero className='container'>
      <div className='flex-hero'>
        <StyledHeadings as='h5'>
          {ContentDeposits.hero.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' className='title-hero'>
          {ContentDeposits.hero.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1'>
          {ContentDeposits.hero.p_description}
        </StyledTexts>
      </div>
      <div className='flex-hero flex-hero-2'>
        <div className='safe-wrapper'>
          <Safe className='safe' />
          <SafeDoor className='safe-door' />
          <SafeShadows className='safe-shadows' />
          <ShadowWrapper className='shadow-wrapper' />
          <DoorShadowAnimation className='door-shadow-animation' />
          <Clock className='safe-clock' />
        </div>
      </div>
    </StyledDepositsHero>
  );
};

export default DepositsHero;
