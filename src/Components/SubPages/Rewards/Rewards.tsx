import React from 'react';
import { StyledRewards } from '../../../Styles/SubPages/Rewards/Rewards.styled';
import RewardsHero from './RewardsHero';
import RewardsCoins from './RewardsCoins';
import ContainerSizes from '../../../ContainerSizes';

interface RewardsProps {
  smallState: 'mobile' | 'desktop';
}

const Rewards = ({ smallState }: RewardsProps) => {
  const {small} = ContainerSizes();

  return (
    <StyledRewards>
      <RewardsHero smallState={smallState} small={small} />
      
    </StyledRewards>
  );
};

export default Rewards;
