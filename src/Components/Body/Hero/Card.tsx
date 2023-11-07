import React from 'react';
import { StyledCard } from '../../../Styles/Body/Hero/Card.styled';
import Supreme from '../../../assets/svg/supreme.svg?url';
import SupremeVerse from '../../../assets/svg/supreme-verse.svg?url';

interface CardProps {
  xsmall: boolean;
  xlarge: boolean;
}

const Card = ({xsmall, xlarge} : CardProps) => {
  
  return (
    <StyledCard $xsmall={xsmall} $xlarge={xlarge}  $supreme={Supreme} $supremeVerse={SupremeVerse}>
      
    </StyledCard>
  );
};

export default Card;
