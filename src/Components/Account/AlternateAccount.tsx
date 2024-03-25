import React from 'react';
import { StyledAlternateAccount } from '../../Styles/Account/AlternateAccount.styled';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

interface AlternateAccountProps {
  title: string;
  message: string;
  button: string;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  accountStateManual: number;
}

const AlternateAccount = ({
  title,
  message,
  button,
  setAccountState,
  accountStateManual,
}: AlternateAccountProps) => {
  return (
    <StyledAlternateAccount>
      <StyledTexts $size='p2'>{message}</StyledTexts>
      <StyledTexts
        $link={true}
        $size='p2'
        $arrow={false}
        onClick={() => setAccountState(accountStateManual)}
      >
        {button}
      </StyledTexts>
    </StyledAlternateAccount>
  );
};

export default AlternateAccount;
