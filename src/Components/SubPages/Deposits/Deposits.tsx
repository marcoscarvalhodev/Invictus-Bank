import React from 'react';
import { StyledDeposits } from '../../../Styles/SubPages/Deposits/Deposits.styled';
import DepositsHero from './DepositsHero';
import DepositsAdvantages from './DepositsAdvantages';
import ContainerSizes from '../../../ContainerSizes';
import DepositsBulletAdvantages from './DepositsBulletAdvantages';

interface DepositsProps {
  smallState: 'mobile' | 'desktop';
}

const Deposits = ({ smallState }: DepositsProps) => {
  const {small} = ContainerSizes();

  return <StyledDeposits>
    <DepositsHero smallState={smallState} small={small}/>
    <DepositsAdvantages smallState={smallState} small={small}/>
    <DepositsBulletAdvantages smallState={smallState} small={small}/>
  </StyledDeposits>;
};

export default Deposits;
