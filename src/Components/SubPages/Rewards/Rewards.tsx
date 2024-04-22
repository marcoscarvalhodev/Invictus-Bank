import React from 'react';
import { StyledRewards } from '../../../Styles/SubPages/Rewards/Rewards.styled';
import RewardsHero from './RewardsHero';
import RewardsCommunity from './RewardsCommunity';
import RewardsBulletAdvantages from './RewardsBulletAdvantages';
import Head from '../../../Helper/Head';

interface RewardsProps {
  small: boolean;
}

const Rewards = ({ small }: RewardsProps) => {
  return (
    <StyledRewards>
      <Head title='Rewards' description='Rewards section of Supreme Bank application'/>
      <RewardsHero small={small} />
      <RewardsCommunity />
      <RewardsBulletAdvantages />
    </StyledRewards>
  );
};

export default Rewards;
