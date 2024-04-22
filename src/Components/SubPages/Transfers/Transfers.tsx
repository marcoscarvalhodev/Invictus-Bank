import React from 'react';
import { StyledTransfers } from '../../../Styles/SubPages/Transfers/Transfers.styled';
import TransfersHero from './TransfersHero';
import TransfersAdvantages from './TransfersAdvantages';
import TransfersBulletAdvantages from './TransfersBulletAdvantages';
import Head from '../../../Helper/Head';

const Transfers = () => {
  return (
    <StyledTransfers>
      <Head title='Transfers' description='Transfers section of Supreme Bank application'/>
      <TransfersHero />
      <TransfersAdvantages />
      <TransfersBulletAdvantages />
    </StyledTransfers>
  );
};

export default Transfers;
