import React from 'react';
import { StyledRewardsHero } from '../../../Styles/SubPages/Rewards/RewardsHero.styled';
import RewardsGift from './RewardsGift';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

interface RewardsProps {
  smallState: 'mobile' | 'desktop';
}

const RewardsHero = ({ smallState }: RewardsProps) => {
  return (
    <StyledRewardsHero className='container'>
      <div className='flex-hero'>
        <StyledHeadings as='h5' $device={smallState}>
          Rewards
        </StyledHeadings>
        <StyledHeadings as='h2' $device={smallState} className='title-hero'>
          Bountiful surprises await you with our exclusive rewards.
        </StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}>
          It's reward time! Your bank's got your back with exclusive treats –
          dive into the goodies!
        </StyledTexts>
      </div>

      <div className='flex-hero flex-hero-2'>
        <RewardsGift />
      </div>
    </StyledRewardsHero>
  );
};

export default RewardsHero;
