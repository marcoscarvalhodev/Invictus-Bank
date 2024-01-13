import React from 'react';
import { StyledCardsHero } from '../../../Styles/SubPages/Cards/CardsHero.styled';

interface CardsHeroProps {
  smallState: "mobile" | "desktop";
}

const CardsHero = ({smallState} : CardsHeroProps) => {
  return <StyledCardsHero className='container'>CardsHero</StyledCardsHero>;
};

export default CardsHero;
