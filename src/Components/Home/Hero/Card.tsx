import React from 'react';
import { StyledCard } from '../../../Styles/Home/Hero/Card.styled';
import Supreme from '../../../assets/svg/supreme.svg?react';
import SupremeVerse from '../../../assets/svg/supreme-verse.svg?react';

interface CardProps {}

const Card = () => {
  return (
    <StyledCard>
      <div className='card-wrapper'>
        <Supreme className='cards card-front' />
        <SupremeVerse className='cards card-verse' />
      </div>
    </StyledCard>
  );
};

export default Card;
