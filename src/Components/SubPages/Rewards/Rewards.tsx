import React from 'react';
import { StyledRewards } from '../../../Styles/SubPages/Rewards/Rewards.styled';
import RewardsHero from './RewardsHero';
import RewardsCoins from './RewardsCoins';
import ContainerSizes from '../../../ContainerSizes';

interface RewardsProps {
  smallState: 'mobile' | 'desktop';
  small: boolean;
}

const Rewards = ({ smallState, small }: RewardsProps) => {
  

  return (
    <StyledRewards>
      <RewardsHero smallState={smallState} small={small} />
      
    </StyledRewards>
  );
};

export default Rewards;
