import React from 'react'
import { StyledCards } from '../../../Styles/SubPages/Cards/Cards.styled'
import CardsHero from './CardsHero';

interface CardsProps {
  smallState: "mobile" | "desktop";
}

const Cards = ({smallState}: CardsProps) => {
  return (
    <StyledCards>
      <CardsHero smallState={smallState}/>
    </StyledCards>
  )
}

export default Cards