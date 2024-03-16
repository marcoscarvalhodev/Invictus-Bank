import React from 'react';
import { StyledRewards } from '../../../Styles/SubPages/Rewards/Rewards.styled';
import RewardsHero from './RewardsHero';
import RewardsCoins from './RewardsCoins';
import ContainerSizes from '../../../ContainerSizes';

interface RewardsProps {
  small: boolean;
}

const Rewards = ({ small }: RewardsProps) => {
  return (
    <StyledRewards>
      <RewardsHero small={small} />
    </StyledRewards>
  );
};

export default Rewards;
