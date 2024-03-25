import React from 'react';

import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';
import { StyledSignupForm } from '../../Styles/Account/SignupForm.styled';
import { ContentLoginSignupForm } from '../../Contents';
import Input from '../Reusable/Input';
import Button from '../Reusable/Button';
import EmailIcon from '../../assets/svg/login/email.svg?react';
import PasswordIcon from '../../assets/svg/login/password.svg?react';
import UserIcon from '../../assets/svg/login/user.svg?react';
import AlternateAccount from './AlternateAccount';
import { NavLink } from 'react-router-dom';

import useForm from '../../Hooks/useForm';
import PasswordShow from './PasswordShow';

interface SignupFormProps {
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
}

const SignupForm = ({
  setAccountState,
  
}: SignupFormProps) => {
  const name = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const [passwordShow, setPasswordShow] = React.useState(false);

  return (
    <StyledSignupForm
      className='signup-form'
    >
      <div>
        <StyledHeadings as='h2' className='title'>
          {ContentLoginSignupForm.signup.h2}
        </StyledHeadings>
        <StyledHeadings as='h5' className='description'>
          {ContentLoginSignupForm.signup.h4}
        </StyledHeadings>
      </div>

      <form className='form'>
        <Input
          name='name-signup'
          label='Name'
          type='text'
          icon={<UserIcon className='icon user-icon' />}
          {...name}
        />
        <Input
          name='email-signup'
          label='Email'
          type='text'
          icon={<EmailIcon className='icon email-icon' />}
          {...email}
        />
        <Input
          name='password-signup'
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
          <Button classed='button'>Signup</Button>
        </NavLink>
      </form>

      <AlternateAccount
        title={ContentLoginSignupForm.alternateAccount.signup.title}
        message={ContentLoginSignupForm.alternateAccount.signup.message}
        button={ContentLoginSignupForm.alternateAccount.signup.button}
        setAccountState={setAccountState}
        accountStateManual={1}
      />
    </StyledSignupForm>
  );
};

export default SignupForm;
