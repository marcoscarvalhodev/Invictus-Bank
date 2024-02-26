import React from 'react';
import { StyledRewardsHero } from '../../../Styles/SubPages/Rewards/RewardsHero.styled';
import RewardsGift from './RewardsGift';

interface RewardsProps {
  smallState: 'mobile' | 'desktop';
}

const RewardsHero = ({ smallState }: RewardsProps) => {
  return <StyledRewardsHero className='container'>
    <RewardsGift />
  </StyledRewardsHero>;
};

export default RewardsHero
