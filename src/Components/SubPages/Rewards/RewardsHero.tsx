import React from 'react';
import { StyledRewardsHero } from '../../../Styles/SubPages/Rewards/RewardsHero.styled';
import RewardsGift from './RewardsGift';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { ContentRewards } from '../../../Contents';

interface RewardsProps {
  small: boolean;
}

const RewardsHero = ({ small }: RewardsProps) => {
  return (
    <StyledRewardsHero className='container'>
      <div className='flex-hero flex-hero-1'>
        <StyledHeadings as='h5'>
          {ContentRewards.hero.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' className='title-hero'>
          {ContentRewards.hero.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1'>
          {ContentRewards.hero.p_description}
        </StyledTexts>
      </div>

      <div className='flex-hero flex-hero-2'>
        <RewardsGift small={small} />
      </div>
    </StyledRewardsHero>
  );
};

export default RewardsHero;
