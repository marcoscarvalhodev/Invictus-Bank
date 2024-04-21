import React from 'react';
import { StyledSavings } from '../../../Styles/SubPages/Savings/Savings.styled';
import SavingsSlides from './SavingsSlides.tsx';
import SavingsHero from './SavingsHero.tsx';
import SavingsAdvantages from './SavingsAdvantages.tsx';

interface SavingsProps {
  small: boolean;
}

const Savings = ({ small }: SavingsProps) => {
  return (
    <StyledSavings>
      <SavingsHero small={small} />
      <SavingsSlides />
      <SavingsAdvantages />
    </StyledSavings>
  );
};

export default Savings;
