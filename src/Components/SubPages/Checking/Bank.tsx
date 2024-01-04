import React from 'react'
import { StyledBank } from '../../../Styles/SubPages/Checking/bank.styled'
import BankSVG from '../../../assets/svg/checking/bank.svg?react';
import Money from '../../../assets/svg/checking/money.svg?react';

const Bank = () => {
  return (
    <StyledBank>
      <BankSVG className='bank'/>

      <Money className='money-1'/>
      <Money className='money-2'/>
    </StyledBank>
  )
}

export default Bank