import React from 'react';
import { StyledRewardsGift } from '../../../Styles/SubPages/Rewards/RewardsGift.styled';
import { ContentRewards } from '../../../Contents';
import KnotGift from '../../../assets/svg/rewards/knot.svg?react';

interface RewardsGiftProps {
  rangeState: number;
}

const RewardsGift = ({rangeState} : RewardsGiftProps) => {
  return (
    <StyledRewardsGift $rangeState={rangeState}>
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
                <div className={`knot-fill-wrapper knot-fill-wrapper-${index + 1}`}>
                <div className={`knot-fill knot-fill-${index + 1}`}></div>
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
