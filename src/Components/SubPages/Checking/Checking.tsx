import React from 'react';
import { StyledChecking } from '../../../Styles/SubPages/Checking/Checking.styled';
import CheckingHero from './CheckingHero';
import CheckingSlides from './CheckingSlides';
import CheckingAdvantages from './CheckingAdvantages';
import Head from '../../../Helper/Head';

const Checking = () => {
  return (
    <StyledChecking>
      <Head title='Checking' description='Checking section of Supreme Bank application'/>
      <CheckingHero />
      <CheckingSlides />
      <CheckingAdvantages />
    </StyledChecking>
  );
};

export default Checking;
