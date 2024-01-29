import React from 'react';
import { StyledTransfersHero } from '../../../Styles/SubPages/Transfers/TransfersHero.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';

import { ContentTransfers } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';


interface TransfersHeroProps {
  smallState: "desktop" | "mobile";
}

const TransfersHero = ({smallState} : TransfersHeroProps) => {
  return (
    <StyledTransfersHero className='container'>
      <div className='flex-hero flex-hero-1'>
        <StyledHeadings as="h5" $device={smallState}>{ContentTransfers.hero.h5_subtitle}</StyledHeadings>
        <StyledHeadings as="h2" $device={smallState} className='title-hero'>{ContentTransfers.hero.h2_title}</StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}>
          {ContentTransfers.hero.p_description}
        </StyledTexts>
      </div>
      <div className='flex-hero flex-hero-2'></div>
    </StyledTransfersHero>
  );
};

export default TransfersHero;
