import React from 'react';
import { StyledChecking } from '../../../Styles/SubPages/Checking/Checking.styled';
import CheckingHero from './CheckingHero';
import CheckingSlides from './CheckingSlides';

interface CheckingProps {
  smallState: "mobile" | "desktop";
}

const Checking = ({smallState}: CheckingProps) => {
  return (
    <StyledChecking>
      <CheckingHero smallState={smallState}/>
      <CheckingSlides smallState={smallState}/>
    </StyledChecking>
  )
}

export default Checking