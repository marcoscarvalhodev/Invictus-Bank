import React from 'react';
import { StyledDeposits } from '../../../Styles/SubPages/Deposits/Deposits.styled';
import DepositsHero from './DepositsHero';
import DepositsAdvantages from './DepositsAdvantages';
import DepositsBulletAdvantages from './DepositsBulletAdvantages';
import Head from '../../../Helper/Head';

const Deposits = () => {
  return (
    <StyledDeposits>
      <Head title='Deposits' description='Deposits section of Supreme Bank application'/>
      <DepositsHero />
      <DepositsAdvantages />
      <DepositsBulletAdvantages />
    </StyledDeposits>
  );
};

export default Deposits;
