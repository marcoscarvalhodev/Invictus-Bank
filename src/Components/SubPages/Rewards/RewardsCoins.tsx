import React from 'react';

import { StyledRewardsCoins } from '../../../Styles/SubPages/Rewards/RewardsCoins.styled';
import Coin from '../../../assets/svg/savings/pig-coin/coin-wrapper.svg?react';

interface RewardsCoinsProps {
  testState: boolean;
}

const RewardsCoins = () => {
  return (
    <StyledRewardsCoins>
      {[...Array(10)].map((x, i) => {
        return (
          <div className={`container-coin container-coin-${i}`} key={i}>
            <div className='coined'>
              <Coin className='face-coin front-coin' />
              <Coin className='face-coin back-coin' />
              {[...Array(20)].map((x, i) => (
                <div className={`side-coin figureSide-${i}`} key={i}></div>
              ))}
            </div>
          </div>
        );
      })}
    </StyledRewardsCoins>
  );
};

export default RewardsCoins;
