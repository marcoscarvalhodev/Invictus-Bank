import React from 'react';
import { StyledSavings } from '../../../Styles/SubPages/Savings/Savings.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAccountTypes } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Pig from './Pig';
import HeroBackground from '../../Home/Hero/HeroBackground.tsx';
import Button from '../../Reusable/Button.tsx';
import SavingsSlides from './SavingsSlides.tsx';
import SavingsHero from './SavingsHero.tsx';
import SavingsAdvantages from './SavingsAdvantages.tsx';

interface SavingsProps {
  smallState: 'mobile' | 'desktop';
}

const Savings = ({ smallState }: SavingsProps) => {
  return (
    <StyledSavings>
      <SavingsHero smallState={smallState}/>

      <SavingsSlides smallState={smallState} />
      <SavingsAdvantages smallState={smallState}/>
    </StyledSavings>
  );
};

export default Savings;
