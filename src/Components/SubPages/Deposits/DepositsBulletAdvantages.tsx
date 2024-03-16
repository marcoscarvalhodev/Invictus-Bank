import React from 'react';
import { StyledDepositsBulletAdvantages } from '../../../Styles/SubPages/Deposits/DepositsBulletAdvantages.styled';
import { ContentDeposits } from '../../../Contents';
import Icons from '../../Reusable/Icons';
import IconCheck from '../../../assets/svg/icon-check.svg?react';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

const DepositsBulletAdvantages = () => {
  return (
    <StyledDepositsBulletAdvantages>
      <div className='container'>
        <ul>
          {ContentDeposits.advantages.bullets.map(({ bullet, id }) => (
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
    </StyledDepositsBulletAdvantages>
  );
};

export default DepositsBulletAdvantages;
