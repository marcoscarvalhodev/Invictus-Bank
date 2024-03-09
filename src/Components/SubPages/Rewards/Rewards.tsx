import React from 'react';
import { StyledRewards } from '../../../Styles/SubPages/Rewards/Rewards.styled';
import RewardsHero from './RewardsHero';
import RewardsCoins from './RewardsCoins';

interface RewardsProps {
  smallState: 'mobile' | 'desktop';
}

const Rewards = ({ smallState }: RewardsProps) => {
  return (
    <StyledRewards>
      <RewardsHero smallState={smallState} />
      
    </StyledRewards>
  );
};

export default Rewards;
