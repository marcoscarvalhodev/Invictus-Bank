import React from 'react';
import { StyledTransfers } from '../../../Styles/SubPages/Transfers/Transfers.styled';
import TransfersHero from './TransfersHero';
import TransfersAdvantages from './TransfersAdvantages';
import TransfersBulletAdvantages from './TransfersBulletAdvantages';


const Transfers = () => {
  return (
    <StyledTransfers>
      <TransfersHero/>
      <TransfersAdvantages />
      <TransfersBulletAdvantages />
    </StyledTransfers>
  );
};

export default Transfers;
