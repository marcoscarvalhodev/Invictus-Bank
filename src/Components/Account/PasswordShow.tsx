import React from 'react';

import EyeIcon from '../../assets/svg/login/eye-icon.svg?react';
import EyeHiddenIcon from '../../assets/svg/login/eye-icon-hide.svg?react';
import { StyledPasswordShow } from '../../Styles/Account/PasswordShow.styled';

interface PasswordShowProps {
  setPassowrdShow: React.Dispatch<React.SetStateAction<boolean>>;
  passwordShow: boolean;
}

const PasswordShow = ({ passwordShow, setPassowrdShow }: PasswordShowProps) => {
  
  return (
    <StyledPasswordShow onClick={() => setPassowrdShow(!passwordShow)}>
      {passwordShow ? (
        <EyeHiddenIcon className='eye-icon' />
      ) : (
        <EyeIcon className='eye-icon' />
      )}
    </StyledPasswordShow>
  );
};

export default PasswordShow;
