import React from 'react';
import { StyledDepositsHero } from '../../../Styles/SubPages/Deposits/DepositsHero.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

import Safe from '../../../assets/svg/deposits/safe.svg?react';
import SafeDoor from '../../../assets/svg/deposits/safe-door.svg?react';
import SafeShadows from '../../../assets/svg/deposits/safe-shadows.svg?react';
import ShadowWrapper from '../../../assets/svg/deposits/shadow-wrapper.svg?react';

import { ContentDeposits } from '../../../Contents';

interface DepositsHeroProps {
  smallState: 'mobile' | 'desktop';
}

const DepositsHero = ({ smallState }: DepositsHeroProps) => {
  return (
    <StyledDepositsHero className='container'>
      <div className='flex-hero'>
        <StyledHeadings as='h5' $device={smallState}>
          {ContentDeposits.hero.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' $device={smallState} className='title-hero'>
        {ContentDeposits.hero.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}>
        {ContentDeposits.hero.p_description}
        </StyledTexts>
      </div>
      <div className='flex-hero flex-hero-2'>
        <div className='safe-wrapper'>
          <Safe className='safe' />
          
            <SafeDoor className='safe-door' />
            <SafeShadows className='safe-shadows' />
            <ShadowWrapper className='shadow-wrapper' />
          
        </div>
      </div>
    </StyledDepositsHero>
  );
};

export default DepositsHero;
