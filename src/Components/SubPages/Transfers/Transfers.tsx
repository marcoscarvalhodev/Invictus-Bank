import React from 'react';
import { StyledTransfers } from '../../../Styles/SubPages/Transfers/Transfers.styled';
import TransfersHero from './TransfersHero';
import TransfersAdvantages from './TransfersAdvantages';
import TransfersBulletAdvantages from './TransfersBulletAdvantages';
import ContainerSizes from '../../../ContainerSizes';


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
