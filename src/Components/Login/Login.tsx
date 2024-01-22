import React from 'react';
import { StyledLogin } from '../../Styles/Login/Login.styled';
import DotsLogin from '../../assets/svg/login/login-dots.svg?react';
import BackgroundLogin from '../../assets/svg/login/login-background.svg?react';
import LoginForm from './LoginForm';

interface LoginProps {
  smallState: "desktop" | "mobile";
}

const Login = ({smallState} : LoginProps) => {
  return (
    <StyledLogin className='container'>
      <div className='login-wrapper'>
        <div className='background-wrapper'>
          <BackgroundLogin className='background-login' />
          <DotsLogin className='dots-login dots-login-1' />
          <DotsLogin className='dots-login dots-login-2' />
        </div>

        <LoginForm smallState={smallState} />
      </div>
    </StyledLogin>
  );
};

export default Login;
