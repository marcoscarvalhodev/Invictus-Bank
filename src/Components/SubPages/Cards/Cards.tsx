import React from 'react';
import { StyledCards } from '../../../Styles/SubPages/Cards/Cards.styled';
import CardsHero from './CardsHero';
import CardsSlides from './CardsSlides';
import Head from '../../../Helper/Head';

const Cards = () => {
  return (
    <StyledCards>
      <Head title='Cards' description='Cards section of Supreme Bank application'/>
      <CardsHero />
      <CardsSlides />
    </StyledCards>
  );
};

export default Cards;
