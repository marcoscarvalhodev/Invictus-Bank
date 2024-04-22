import React from 'react';
import { StyledAccount } from '../../Styles/Account/Account.styled';
import DotsLogin from '../../assets/svg/login/login-dots.svg?react';
import BackgroundLogin from '../../assets/svg/login/login-background.svg?react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import AccountPositions from './AccountPositions';
import Head from '../../Helper/Head';

interface AccountProps {
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  accountState: number;
  setFooterState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Account = ({ setAccountState, accountState, setFooterState}: AccountProps) => {

  React.useEffect(() => {
    setFooterState(false);

    return () => setFooterState(true)
  })
  return (
    <StyledAccount className='container' $accountState={accountState}>

      {accountState === 1 ? <Head title='Login' description='Login section of Supreme Bank application'/> : <Head title='Signup' description='Signup section of Supreme Bank application'/>}
      <div className='login-wrapper'>
        <div className='background-wrapper'>
          <svg
            viewBox='0 0 1496 948'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='background-login'
          ></svg>
          <svg
            viewBox='0 0 316 316'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='dots-login dots-login-1'
          ></svg>
          <svg
            viewBox='0 0 316 316'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='dots-login dots-login-2'
          ></svg>
          
        </div>

        {(accountState === 2 && (
          <AccountPositions
            position_1={<SignupForm setAccountState={setAccountState} />}
            position_2={<LoginForm setAccountState={setAccountState} />}
          />
        )) ||
          (accountState === 1 && (
            <AccountPositions
              position_1={<LoginForm setAccountState={setAccountState} />}
              position_2={<SignupForm setAccountState={setAccountState} />}
            />
          ))}
      </div>
    </StyledAccount>
  );
};

export default Account;
