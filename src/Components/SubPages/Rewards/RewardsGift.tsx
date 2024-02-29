import React from 'react';
import { StyledRewardsGift } from '../../../Styles/SubPages/Rewards/RewardsGift.styled';
import { ContentRewards } from '../../../Contents';

const RewardsGift = () => {
  return (
    <StyledRewardsGift>
      <div className='container-gift'>
        <div className='lid-wrapper'>
          <div className='lid-gift'>
            {ContentRewards.hero.box.map(({ strap }, index) => (
              <div key={index} className={`lid lid-${index + 1}`}>
                {strap}
              </div>
            ))}
          </div>
        </div>

        <div className='box-gift'>
          {ContentRewards.hero.box.map(({ strap }, index) => (
            <div key={index} className={`face face-${index + 1}`}>
              {strap}
            </div>
          ))}
        </div>
      </div>
    </StyledRewardsGift>
  );
};

export default RewardsGift;
