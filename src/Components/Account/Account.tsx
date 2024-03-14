import React from 'react';
import { StyledAccount } from '../../Styles/Account/Account.styled';
import DotsLogin from '../../assets/svg/login/login-dots.svg?react';
import BackgroundLogin from '../../assets/svg/login/login-background.svg?react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import AccountPositions from './AccountPositions';
import ContainerSizes from '../../ContainerSizes';

interface AccountProps {
  smallState: 'desktop' | 'mobile';
  smallMediumState: 'desktop' | 'mobile';
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  accountState: number;
  xsmall: boolean;
  small: boolean;
  medium: boolean;
}

const Account = ({
  smallState,
  setAccountState,
  accountState,
  smallMediumState,
  small,
  xsmall,
  medium,
}: AccountProps) => {
  return (
    <StyledAccount
      className='container'
      $accountState={accountState}
      $small={small}
    >
      <div className='login-wrapper'>
        <div className='background-wrapper'>
          {!small && (
            <>
              <BackgroundLogin className='background-login' />
              <DotsLogin className='dots-login dots-login-1' />
              <DotsLogin className='dots-login dots-login-2' />
            </>
          )}
        </div>

        {(accountState === 2 && (
          <AccountPositions
            position_1={
              <SignupForm
                smallMediumState={smallMediumState}
                setAccountState={setAccountState}
                xsmall={xsmall}
                small={small}
                medium={medium}
              />
            }
            position_2={
              <LoginForm
                smallMediumState={smallMediumState}
                setAccountState={setAccountState}
                xsmall={xsmall}
                small={small}
                medium={medium}
              />
            }
          />
        )) ||
          (accountState === 1 && (
            <AccountPositions
              position_1={
                <LoginForm
                  smallMediumState={smallMediumState}
                  setAccountState={setAccountState}
                  xsmall={xsmall}
                  small={small}
                  medium={medium}
                />
              }
              position_2={
                <SignupForm
                  smallMediumState={smallMediumState}
                  setAccountState={setAccountState}
                  xsmall={xsmall}
                  small={small}
                  medium={medium}
                />
              }
            />
          ))}
      </div>
    </StyledAccount>
  );
};

export default Account;
