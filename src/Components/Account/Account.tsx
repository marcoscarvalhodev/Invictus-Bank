import React from 'react';
import { StyledAccount } from '../../Styles/Account/Account.styled';
import DotsLogin from '../../assets/svg/login/login-dots.svg?react';
import BackgroundLogin from '../../assets/svg/login/login-background.svg?react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AccountProps {
  smallState: 'desktop' | 'mobile';
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  accountState: number;
}

const Account = ({
  smallState,
  setAccountState,
  accountState,
}: AccountProps) => {

  React.useEffect(() => {
    console.log(accountState)
  })
  
  return (
    <StyledAccount className='container' $accountState={accountState}>
      <div className='login-wrapper'>
        <div className='background-wrapper'>
          <BackgroundLogin className='background-login' />
          <DotsLogin className='dots-login dots-login-1' />
          <DotsLogin className='dots-login dots-login-2' />
        </div>
        
        <LoginForm smallState={smallState} setAccountState={setAccountState} />
        <SignupForm smallState={smallState} setAccountState={setAccountState} />
        
        
      </div>
    </StyledAccount>
  );
};

export default Account;
