import React from 'react';
import { StyledChecking } from '../../../Styles/SubPages/Checking/Checking.styled';
import CheckingHero from './CheckingHero';
import CheckingSlides from './CheckingSlides';
import CheckingAdvantages from './CheckingAdvantages';

const Checking = () => {
  return (
    <StyledChecking>
      <CheckingHero/>
      <CheckingSlides/>
      <CheckingAdvantages/>
    </StyledChecking>
  );
};

export default Checking;
