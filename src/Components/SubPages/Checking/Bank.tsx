import React from 'react';
import { StyledBank } from '../../../Styles/SubPages/Checking/bank.styled';
import Phone from '../../../assets/svg/checking/phone.svg?react';


interface BankProps {
  small: boolean;
}

const Bank = ({ small }: BankProps) => {
  return (
    <StyledBank $small={small}>
      <div className='phone-wrapper'>
        <Phone className='phone'/>
        <div className='drop'></div>
      </div>
    </StyledBank>
  );
};

export default Bank;
