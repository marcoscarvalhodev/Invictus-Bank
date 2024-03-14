import React from 'react';
import { StyledSavings } from '../../../Styles/SubPages/Savings/Savings.styled';
import SavingsSlides from './SavingsSlides.tsx';
import SavingsHero from './SavingsHero.tsx';
import SavingsAdvantages from './SavingsAdvantages.tsx';

interface SavingsProps {
  smallState: 'mobile' | 'desktop';
  xsmall: boolean;
  small: boolean;
  medium: boolean;
}

const Savings = ({ smallState, xsmall, small, medium }: SavingsProps) => {
  return (
    <StyledSavings>
      <SavingsHero smallState={smallState} small={small} />

      <SavingsSlides
        smallState={smallState}
        small={small}
        medium={medium}
        xsmall={xsmall}
      />
      <SavingsAdvantages smallState={smallState} small={small} />
    </StyledSavings>
  );
};

export default Savings;
