import React from 'react';
import { StyledSavings } from '../../../Styles/SubPages/Savings/Savings.styled';
import SavingsSlides from './SavingsSlides.tsx';
import SavingsHero from './SavingsHero.tsx';
import SavingsAdvantages from './SavingsAdvantages.tsx';
import Head from '../../../Helper/Head.tsx';

interface SavingsProps {
  small: boolean;
}

const Savings = ({ small }: SavingsProps) => {
  return (
    <StyledSavings>
      <Head title='Savings' description='Savings section of Supreme Bank application'/>
      <SavingsHero small={small} />
      <SavingsSlides />
      <SavingsAdvantages />
    </StyledSavings>
  );
};

export default Savings;
