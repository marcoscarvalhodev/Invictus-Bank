import React from 'react';
import { StyledBank } from '../../../Styles/SubPages/Checking/bank.styled';
import Phone from '../../../assets/svg/checking/phone.svg?react';
import BackgroundPhone from '../../../assets/svg/checking/background.svg?react';

import BankCard from '../../../assets/svg/checking/bank-card.svg?react';
import ShadowPhone from '../../../assets/svg/checking/phone-shadow.svg?react';
import ShadowCard from '../../../assets/svg/checking/shadow-card.svg?react';


interface BankProps {
  small: boolean;
}

const Bank = ({ small }: BankProps) => {
  return (
    <StyledBank $small={small}>
      <div className='phone-wrapper'>
        <Phone className='phone' />
        <div className='drop'></div>
        <BankCard className='bank-card' />
        <BackgroundPhone className='background-phone' />
        <ShadowCard className="shadow-card"/>
      </div>

      <ShadowPhone className='shadow-phone' />
    </StyledBank>
  );
};

export default Bank;
