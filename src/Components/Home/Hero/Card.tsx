import React from 'react';
import { StyledCard } from '../../../Styles/Home/Hero/Card.styled';
import Supreme from '../../../assets/svg/supreme.svg?url';
import SupremeVerse from '../../../assets/svg/supreme-verse.svg?url';

interface CardProps {}

const Card = () => {
  return (
    <StyledCard $supreme={Supreme} $supremeVerse={SupremeVerse}></StyledCard>
  );
};

export default Card;
