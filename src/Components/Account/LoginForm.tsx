import React from 'react';
import { StyledLoginForm } from '../../Styles/Account/LoginForm.styled';
import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';

import { ContentLoginSignupForm } from '../../Contents';
import Input from '../Reusable/Input';
import Button from '../Reusable/Button';
import EmailIcon from '../../assets/svg/login/email.svg?react';
import PasswordIcon from '../../assets/svg/login/password.svg?react';
import AlternateAccount from './AlternateAccount';
import { NavLink } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import PasswordShow from './PasswordShow';


interface LoginFormProps {
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
}

const LoginForm = ({ setAccountState }: LoginFormProps) => {
  const email = useForm('email');
  const password = useForm('password');

  const [passwordShow, setPasswordShow] = React.useState(false);

  return (
    <StyledLoginForm className='login-form'>
      <div>
        <StyledHeadings as='h2' className='title'>
          {ContentLoginSignupForm.login.h2}
        </StyledHeadings>
        <StyledHeadings as='h5' className='description'>
          {ContentLoginSignupForm.login.h4}
        </StyledHeadings>
      </div>

      <form className='form'>
        <Input
          name='email-login'
          label='Email'
          type='text'
          icon={<EmailIcon className='icon email-icon' />}
          {...email}
        />
        <Input
          name='password-login'
          label='Password'
          type={passwordShow ? 'text' : 'password'}
          icon={<PasswordIcon className='icon' />}
          {...password}
          inputPassword={true}
        >
          <PasswordShow
            passwordShow={passwordShow}
            setPassowrdShow={setPasswordShow}
          />
        </Input>
        <NavLink to='/'>
          <Button classed='button' light={true}>
            Login
          </Button>
        </NavLink>
      </form>

      <AlternateAccount
        title={ContentLoginSignupForm.alternateAccount.login.title}
        message={ContentLoginSignupForm.alternateAccount.login.message}
        button={ContentLoginSignupForm.alternateAccount.login.button}
        setAccountState={setAccountState}
        accountStateManual={2}
      />
    </StyledLoginForm>
  );
};

export default LoginForm;
