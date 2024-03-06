import React from 'react';
import { StyledRewardsGift } from '../../../Styles/SubPages/Rewards/RewardsGift.styled';
import { ContentRewards } from '../../../Contents';
import KnotGift from '../../../assets/svg/rewards/knot.svg?react';
import ShadowLid from '../../../assets/svg/rewards/shadow-lid.svg?react';
import ShadowBox from '../../../assets/svg/rewards/shadow-box.svg?react';

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
            </div>

            {[...Array(163)].map((item, index) => (
              <div
                className={`knot-fill-wrapper knot-fill-wrapper-${index + 1}`}
              >
                <div className={`knot-fill knot-fill-${index + 1}`}></div>
              </div>
            ))}

            <div className='shadow-lid-wrapper'>
              <ShadowLid className='shadow-lid' />
            </div>
          </div>
        </div>

        <div className='box-gift'>
          {ContentRewards.hero.box.map(({ strap }, index) => (
            <div key={index} className={`face face-${index + 1}`}>
              {strap}
            </div>
          ))}

          <ShadowBox className='shadow-box' />
        </div>

        
      </div>
    </StyledRewardsGift>
  );
};

export default RewardsGift;
