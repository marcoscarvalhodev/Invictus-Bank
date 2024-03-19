import React from 'react';
import { StyledRewardsCommunity } from '../../../Styles/SubPages/Rewards/RewardsCommunity.styled';
import PeopleHands from '../../../assets/img/rewards/community-rewards.jpg';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentRewards } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
const RewardsCommunity = () => {
  return (
    <StyledRewardsCommunity className='container'>
      <div className='advantages-flex'>
        <div className='people-hands-wrapper'>
          <img
            src={PeopleHands}
            className='people-hands'
            alt='Group of people joining hands together'
          />
        </div>
      </div>
      <div className='advantages-flex'>
        <StyledHeadings as={'h5'}>
          {ContentRewards.advantages.h5_subtitle}
        </StyledHeadings>

        <StyledHeadings as={'h2'} className='title-advantages'>
          {ContentRewards.advantages.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1' className='description-advantages'>
          {ContentRewards.advantages.p_description}
        </StyledTexts>

        <StyledTexts
          $arrow={true}
          $link={true}
          $size='p1'
          className='access-link'
        >
          {ContentRewards.advantages.access_link}
        </StyledTexts>
      </div>
    </StyledRewardsCommunity>
  );
};

export default RewardsCommunity;
