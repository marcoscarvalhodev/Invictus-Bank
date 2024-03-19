import React from 'react';
import { StyledRewards } from '../../../Styles/SubPages/Rewards/Rewards.styled';
import RewardsHero from './RewardsHero';
import RewardsCommunity from './RewardsCommunity';

interface RewardsProps {
  small: boolean;
}

const Rewards = ({ small }: RewardsProps) => {
  return (
    <StyledRewards>
      <RewardsHero small={small} />
      <RewardsCommunity />
    </StyledRewards>
  );
};

export default Rewards;
