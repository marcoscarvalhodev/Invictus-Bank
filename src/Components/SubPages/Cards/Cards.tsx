import React from 'react'
import { StyledCards } from '../../../Styles/SubPages/Cards/Cards.styled'
import CardsHero from './CardsHero';
import CardsSlides from './CardsSlides';

interface CardsProps {
  smallState: "mobile" | "desktop";
  small: boolean;
}

const Cards = ({smallState, small}: CardsProps) => {
  return (
    <StyledCards>
      <CardsHero smallState={smallState} small={small}/>
      <CardsSlides smallState={smallState} small={small}/>
    </StyledCards>
  )
}

export default Cards