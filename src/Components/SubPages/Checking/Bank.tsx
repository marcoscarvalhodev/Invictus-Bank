import React from 'react';
import { StyledBank } from '../../../Styles/SubPages/Checking/bank.styled';
import Phone from '../../../assets/svg/checking/phone.svg?react';
import BackgroundPhone from '../../../assets/svg/checking/background.svg?react';

import BankCard from '../../../assets/svg/checking/bank-card.svg?react';
import ShadowPhone from '../../../assets/svg/checking/phone-shadow.svg?react';
import ShadowCard from '../../../assets/svg/checking/shadow-card.svg?react';
import Logo from '../../../assets/svg/checking/logo.svg?react';
import CrackPhone from '../../../assets/svg/checking/crack.svg?react';

interface BankProps {
  small: boolean;
  xsmall: boolean;
}

const Bank = ({ small, xsmall }: BankProps) => {
  return (
    <StyledBank $small={small} $xsmall={xsmall}>
      <div className='phone-wrapper'>
        <Phone className='phone' />
        <div className='drop'></div>
        <BankCard className='bank-card' />
        <BackgroundPhone className='background-phone' />
        <ShadowCard className="shadow-card"/>
        <Logo className="logo-phone" />
        <CrackPhone className="crack-phone" />
        <ShadowPhone className='shadow-phone' />
      </div>

      
    </StyledBank>
  );
};

export default Bank;
