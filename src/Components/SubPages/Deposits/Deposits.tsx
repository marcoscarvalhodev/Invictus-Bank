import React from 'react';
import { StyledDeposits } from '../../../Styles/SubPages/Deposits/Deposits.styled';
import DepositsHero from './DepositsHero';

interface DepositsProps {
  smallState: 'mobile' | 'desktop';
}

const Deposits = ({ smallState }: DepositsProps) => {
  return <StyledDeposits>
    <DepositsHero smallState={smallState}/>
  </StyledDeposits>;
};

export default Deposits;
