import React from 'react';
import { StyledDeposits } from '../../../Styles/SubPages/Deposits/Deposits.styled';
import DepositsHero from './DepositsHero';
import DepositsAdvantages from './DepositsAdvantages';
import DepositsBulletAdvantages from './DepositsBulletAdvantages';

const Deposits = () => {
  return (
    <StyledDeposits>
      <DepositsHero />
      <DepositsAdvantages />
      <DepositsBulletAdvantages />
    </StyledDeposits>
  );
};

export default Deposits;
