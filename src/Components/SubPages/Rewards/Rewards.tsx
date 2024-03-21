import React from 'react';
import { StyledRewards } from '../../../Styles/SubPages/Rewards/Rewards.styled';
import RewardsHero from './RewardsHero';
import RewardsCommunity from './RewardsCommunity';
import RewardsBulletAdvantages from './RewardsBulletAdvantages';

interface RewardsProps {
  small: boolean;
}

const Rewards = ({ small }: RewardsProps) => {
  return (
    <StyledRewards>
      <RewardsHero small={small} />
      <RewardsCommunity />
      <RewardsBulletAdvantages />
    </StyledRewards>
  );
};

export default Rewards;
