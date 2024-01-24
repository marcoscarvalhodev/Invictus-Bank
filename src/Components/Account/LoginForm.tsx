import React from 'react';
import { StyledLoginForm } from '../../Styles/Account/LoginForm.styled';
import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';

import { ContentLoginSignupForm } from '../../Contents';
import Input from './Input';
import Button from '../Reusable/Button';
import EmailIcon from '../../assets/svg/login/email.svg?react';
import PasswordIcon from '../../assets/svg/login/password.svg?react';
import AlternateAccount from './AlternateAccount';

interface LoginFormProps {
  smallState: 'desktop' | 'mobile';
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
}

const LoginForm = ({ smallState, setAccountState }: LoginFormProps) => {
  return (
    <StyledLoginForm className='login-form'>
      <div>
        <StyledHeadings as='h2' $device={smallState} className='title'>
          {ContentLoginSignupForm.login.h2}
        </StyledHeadings>
        <StyledHeadings as='h5' $device={smallState} className='description'>
          {ContentLoginSignupForm.login.h4}
        </StyledHeadings>
      </div>

      <form className='form'>
        <Input
          name='email-login'
          label='Email'
          type='text'
          smallState={smallState}
          icon={<EmailIcon className='icon email-icon' />}
        />
        <Input
          name='password-login'
          label='Password'
          type='password'
          smallState={smallState}
          icon={<PasswordIcon className='icon' />}
        />
        <Button classed='button'>Login</Button>
      </form>

      <AlternateAccount
        title={ContentLoginSignupForm.alternateAccount.login.title}
        message={ContentLoginSignupForm.alternateAccount.login.message}
        button={ContentLoginSignupForm.alternateAccount.login.button}
        setAccountState={setAccountState}
        smallState={smallState}
        accountStateManual={2}
      />
    </StyledLoginForm>
  );
};

export default LoginForm;
