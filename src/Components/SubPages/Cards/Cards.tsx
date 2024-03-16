import React from 'react'
import { StyledCards } from '../../../Styles/SubPages/Cards/Cards.styled'
import CardsHero from './CardsHero';
import CardsSlides from './CardsSlides';


const Cards = () => {
  return (
    <StyledCards>
      <CardsHero/>
      <CardsSlides />
    </StyledCards>
  )
}

export default Cards