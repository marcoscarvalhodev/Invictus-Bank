import React from 'react';
import { StyledLoginForm } from '../../Styles/Account/LoginForm.styled';
import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';
import { ContentLoginSignupForm } from '../../Contents';
import Input from '../Reusable/Input';
import Button from '../Reusable/Button';
import EmailIcon from '../../assets/svg/login/email.svg?react';
import PasswordIcon from '../../assets/svg/login/password.svg?react';
import AlternateAccount from './AlternateAccount';
import useForm from '../../Hooks/useForm';
import PasswordShow from './PasswordShow';
import { UserContext } from '../../UserContext';

interface LoginFormProps {
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
}

const LoginForm = ({ setAccountState }: LoginFormProps) => {
  const email = useForm('email');
  const password = useForm('password');
  const { userLogin, loginState, data } = React.useContext(UserContext);
  const [passwordShow, setPasswordShow] = React.useState(false);

  React.useEffect(() => {
    console.log(data)
  }, [data])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      userLogin({ login: email.value, password: password.value, stay_logged_in: true });
    }
  };

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

      <form className='form' onSubmit={handleSubmit}>
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

        <Button classed='button' light={true}>
          Login
        </Button>
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
