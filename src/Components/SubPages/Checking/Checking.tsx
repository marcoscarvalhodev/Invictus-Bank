import React from 'react';
import { StyledChecking } from '../../../Styles/SubPages/Checking/Checking.styled';
import CheckingHero from './CheckingHero';

interface CheckingProps {
  smallState: "mobile" | "desktop";
}

const Checking = ({smallState}: CheckingProps) => {
  return (
    <StyledChecking>
      <CheckingHero smallState={smallState}/>
    </StyledChecking>
  )
}

export default Checking