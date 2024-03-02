import React from 'react';
import { StyledRewardsGift } from '../../../Styles/SubPages/Rewards/RewardsGift.styled';
import { ContentRewards } from '../../../Contents';
import KnotGift from '../../../assets/svg/rewards/knot.svg?react';

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

            <div className='knot-gift-wrapper'>
              <KnotGift className='knot-gift knot-gift-1' />
              <KnotGift className='knot-gift knot-gift-2' />

              <div className='knot-fill-wrapper'>
                {[...Array(10)].map((item, index) => (
                  <div className={`knot-fill knot-fill-${index + 1}`}></div>
                ))}
              </div>
            </div>
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
