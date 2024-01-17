import React from 'react'
import { StyledCards } from '../../../Styles/SubPages/Cards/Cards.styled'
import CardsHero from './CardsHero';
import CardsSlides from './CardsSlides';

interface CardsProps {
  smallState: "mobile" | "desktop";
}

const Cards = ({smallState}: CardsProps) => {
  return (
    <StyledCards>
      <CardsHero smallState={smallState}/>
      <CardsSlides smallState={smallState}/>
    </StyledCards>
  )
}

export default Cards