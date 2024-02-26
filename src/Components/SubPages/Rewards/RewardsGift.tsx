import React from 'react';
import { StyledRewardsGift } from '../../../Styles/SubPages/Rewards/RewardsGift.styled';

const RewardsGift = () => {
  return (
    <StyledRewardsGift>
      <div className='container-gift'>
        <div className='box-gift'>
          {[...Array(10)].map((item, index) => (
            <div key={index} className={`face face-${index + 1}`}></div>
          ))}
        </div>
      </div>
    </StyledRewardsGift>
  );
};

export default RewardsGift;
