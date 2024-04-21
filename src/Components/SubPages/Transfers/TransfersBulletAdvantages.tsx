import React from 'react';
import { ContentTransfers } from '../../../Contents';
import Icons from '../../Reusable/Icons';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import IconCheck from '../../../assets/svg/icon-check.svg?react';
import { StyledTransfersBulletAdvantages } from '../../../Styles/SubPages/Transfers/TransfersBulletAdvantages.styled';

interface TransfersBulletAdvantagesProps {}

const TransfersBulletAdvantages = () => {
  return (
    <StyledTransfersBulletAdvantages>
      <div className='container'>
        <ul>
          {ContentTransfers.transfers_bullets.map(({ bullet, id }) => (
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
    </StyledTransfersBulletAdvantages>
  );
};

export default TransfersBulletAdvantages;
