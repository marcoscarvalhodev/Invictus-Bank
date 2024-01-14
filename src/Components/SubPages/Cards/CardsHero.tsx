import React from 'react';
import { StyledCardsHero } from '../../../Styles/SubPages/Cards/CardsHero.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';

import { ContentCards } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

interface CardsHeroProps {
  smallState: 'mobile' | 'desktop';
}

const CardsHero = ({ smallState }: CardsHeroProps) => {
  return (
    <StyledCardsHero className='container'>
      <div className='flex-1'>
        <StyledHeadings $device={smallState} as='h2'>
          {ContentCards.Cards.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings $device={smallState} as='h5'>
          {ContentCards.Cards.h2_title}
        </StyledHeadings>
        <StyledTexts $device={smallState} $size='p1'>
          {ContentCards.Cards.p_description}
        </StyledTexts>
      </div>

      <div></div>
    </StyledCardsHero>
  );
};

export default CardsHero;
