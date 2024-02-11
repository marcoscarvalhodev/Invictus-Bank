import React from 'react';
import { ContentTransfers } from '../../../Contents';
import Icons from '../../Reusable/Icons';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import IconCheck from '../../../assets/svg/icon-check.svg?react';
import { StyledTransfersBulletAdvantages } from '../../../Styles/SubPages/Transfers/TransfersBulletAdvantages.styled';

interface TransfersBulletAdvantagesProps {
  smallState: 'mobile' | 'desktop';
}

const TransfersBulletAdvantages = ({
  smallState,
}: TransfersBulletAdvantagesProps) => {
  return (
    <StyledTransfersBulletAdvantages>
      <div className='container'>
        {ContentTransfers.transfers_bullets.map(({ bullet, id }) => (
          <li key={id} className='bullet-wrapper-advantages'>
            <div className='bullet-advantages bullet-1'>
              <Icons>
                <IconCheck />
              </Icons>
            </div>
            <div className='bullet-advantages bullet-2'>
              <StyledTexts $size='p4' $device={smallState} key={id}>
                {bullet}
              </StyledTexts>
            </div>
          </li>
        ))}
      </div>
    </StyledTransfersBulletAdvantages>
  );
};

export default TransfersBulletAdvantages;
