import React from 'react';
import { StyledLoginForm } from '../../Styles/Account/LoginForm.styled';
import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';

import { ContentLoginSignupForm } from '../../Contents';
import Input from './Input';
import Button from '../Reusable/Button';
import EmailIcon from '../../assets/svg/login/email.svg?react';
import PasswordIcon from '../../assets/svg/login/password.svg?react';
import AlternateAccount from './AlternateAccount';
import { NavLink } from 'react-router-dom';

import useForm from '../../Hooks/useForm';
import PasswordShow from './PasswordShow';
import ContainerSizes from '../../ContainerSizes';

interface LoginFormProps {
  smallMediumState: 'desktop' | 'mobile';
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  xsmall: boolean;
  small: boolean;
  medium: boolean;
}

const LoginForm = ({
  smallMediumState,
  setAccountState,
  xsmall,
  small,
  medium,
}: LoginFormProps) => {
  const email = useForm('email');
  const password = useForm('password');

  const [passwordShow, setPasswordShow] = React.useState(false);

  return (
    <StyledLoginForm
      className='login-form'
      $small={small}
      $medium={medium}
      $xsmall={xsmall}
    >
      <div>
        <StyledHeadings as='h2' $device={smallMediumState} className='title'>
          {ContentLoginSignupForm.login.h2}
        </StyledHeadings>
        <StyledHeadings
          as='h5'
          $device={smallMediumState}
          className='description'
        >
          {ContentLoginSignupForm.login.h4}
        </StyledHeadings>
      </div>

      <form className='form'>
        <Input
          name='email-login'
          label='Email'
          type='text'
          smallMediumState={smallMediumState}
          icon={<EmailIcon className='icon email-icon' />}
          {...email}
        />
        <Input
          name='password-login'
          label='Password'
          type={passwordShow ? 'text' : 'password'}
          smallMediumState={smallMediumState}
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
        smallMediumState={smallMediumState}
        accountStateManual={2}
      />
    </StyledLoginForm>
  );
};

export default LoginForm;
