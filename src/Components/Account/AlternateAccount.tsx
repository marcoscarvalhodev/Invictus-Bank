import React from 'react';
import Button from '../Reusable/Button';
import { StyledAlternateAccount } from '../../Styles/Account/AlternateAccount.styled';
import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';
import { NavLink } from 'react-router-dom';

interface AlternateAccountProps {
  title: string;
  message: string;
  button: string;
  smallState: 'mobile' | 'desktop';
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  accountStateManual: number;
}

const AlternateAccount = ({
  title,
  message,
  button,
  smallState,
  setAccountState,
  accountStateManual,
}: AlternateAccountProps) => {
  return (
    <StyledAlternateAccount>
      
      <StyledTexts $device={smallState} $size='p2'>
        {message}
      </StyledTexts>
      <StyledTexts $link={true} $device={smallState} $size="p2" $arrow={false} onClick={() => setAccountState(accountStateManual)}>{button}</StyledTexts>
    </StyledAlternateAccount>
  );
};

export default AlternateAccount;
