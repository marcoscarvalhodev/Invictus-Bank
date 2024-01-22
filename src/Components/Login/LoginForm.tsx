import React from 'react';
import { StyledLoginForm } from '../../Styles/Login/LoginForm.styled';
import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';

import { ContentLoginForm } from '../../Contents';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';
import Input from './Input';
import Button from '../Reusable/Button';
import UserIcon from '../../assets/svg/login/user.svg?react';
import PasswordIcon from '../../assets/svg/login/password.svg?react';

interface LoginFormProps {
  smallState: 'desktop' | 'mobile';
}

const LoginForm = ({ smallState }: LoginFormProps) => {
  return (
    <StyledLoginForm>
      <div>
        <StyledHeadings as='h2' $device={smallState} className='login-title'>
          {ContentLoginForm.h2}
        </StyledHeadings>
        <StyledHeadings as="h5" $device={smallState} className='login-description'>
        {ContentLoginForm.h4}
        </StyledHeadings>
      </div>

      <form className='login-form'>
        
        <Input name="username" label="Email" type="text" smallState={smallState} icon={ <UserIcon className='icon'/>}/>
        <Input name="password" label="Password" type="password" smallState={smallState} icon={<PasswordIcon className='icon'/>}/>
        <Button classed='button-login'>Login</Button>
      </form>
    </StyledLoginForm>
  );
};

export default LoginForm;
