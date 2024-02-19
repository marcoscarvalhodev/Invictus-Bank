import React from 'react';
import { StyledTransfersHero } from '../../../Styles/SubPages/Transfers/TransfersHero.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';

import { ContentTransfers } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

import Phone1 from '../../../assets/svg/transfers/phone-1.png?url'
import Phone2 from '../../../assets/svg/transfers/phone-2.png?url'

interface TransfersHeroProps {
  smallState: "desktop" | "mobile";
  small: boolean;
}

const TransfersHero = ({smallState, small} : TransfersHeroProps) => {
  return (
    <StyledTransfersHero className='container' $small={small}>
      <div className='flex-hero flex-hero-1'>
        <StyledHeadings as="h5" $device={smallState}>{ContentTransfers.hero.h5_subtitle}</StyledHeadings>
        <StyledHeadings as="h2" $device={smallState} className='title-hero'>{ContentTransfers.hero.h2_title}</StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}>
          {ContentTransfers.hero.p_description}
        </StyledTexts>
      </div>
      <div className='flex-hero flex-hero-2'>
        <div className='phone-wrapper'>
          <img src={Phone1} alt="" className='phone phone-1'/>
          <img src={Phone2} alt="" className='phone phone-2'/>
        </div>
      </div>
    </StyledTransfersHero>
  );
};

export default TransfersHero;
