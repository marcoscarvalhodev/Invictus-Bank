import React from 'react';
import { StyledRewardsBulletAdvantages } from '../../../Styles/SubPages/Rewards/RewardsBulletAdvantages.styled';
import { ContentRewards } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Icons from '../../Reusable/Icons';
import IconCheck from '../../../assets/svg/icon-check.svg?react';

const RewardsBulletAdvantages = () => {
  return (
    <StyledRewardsBulletAdvantages>
      <div className='container'>
        <ul>
          {ContentRewards.bullet_advantages.map(({ bullet, id }) => (
            <li key={id} className='bullet-wrapper-advantages'>
              <div className='bullet-advantages bullet-1'>
                <Icons>
                  <IconCheck />
                </Icons>
              </div>
              <div className='bullet-advantages bullet-2'>
                <StyledTexts $size='p4' key={id}>
                  {bullet}
                </StyledTexts>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledRewardsBulletAdvantages>
  );
};

export default RewardsBulletAdvantages;
