import React from 'react';

import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';
import { StyledSignupForm } from '../../Styles/Account/SignupForm.styled';
import { ContentLoginSignupForm } from '../../Contents';
import Input from './Input';
import Button from '../Reusable/Button';
import EmailIcon from '../../assets/svg/login/email.svg?react';
import PasswordIcon from '../../assets/svg/login/password.svg?react';
import AlternateAccount from './AlternateAccount';

interface SignupFormProps {
  smallState: 'desktop' | 'mobile';
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
}

const SignupForm = ({ smallState, setAccountState }: SignupFormProps) => {
  return (
    <StyledSignupForm className='signup-form'>
      <div>
        <StyledHeadings as='h2' $device={smallState} className='title'>
          {ContentLoginSignupForm.signup.h2}
        </StyledHeadings>
        <StyledHeadings as='h5' $device={smallState} className='description'>
          {ContentLoginSignupForm.signup.h4}
        </StyledHeadings>
      </div>

      <form className='form'>
      <Input
          name='name-signup'
          label='Name'
          type='text'
          smallState={smallState}
          icon={<EmailIcon className='icon email-icon' />}
        />
        <Input
          name='email-signup'
          label='Email'
          type='text'
          smallState={smallState}
          icon={<EmailIcon className='icon email-icon' />}
        />
        <Input
          name='password-signup'
          label='Password'
          type='password'
          smallState={smallState}
          icon={<PasswordIcon className='icon' />}
        />
        <Button classed='button'>Signup</Button>
      </form>

      <AlternateAccount
        title={ContentLoginSignupForm.alternateAccount.signup.title}
        message={ContentLoginSignupForm.alternateAccount.signup.message}
        button={ContentLoginSignupForm.alternateAccount.signup.button}
        setAccountState={setAccountState}
        smallState={smallState}
        accountStateManual={1}
      />
    </StyledSignupForm>
  );
};

export default SignupForm;
