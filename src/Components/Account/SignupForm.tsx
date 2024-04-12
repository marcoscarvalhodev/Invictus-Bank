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


import useForm from '../../Hooks/useForm';
import PasswordShow from './PasswordShow';
import { USER_REGISTER } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import { UserContext } from '../../UserContext';
import ErrorHandle from '../../Helper/ErrorHandle';

interface ErrorStateProps {
  code: number;
  message: string;
}

interface SignupFormProps {
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
}

const SignupForm = ({ setAccountState }: SignupFormProps) => {
  const name = useForm('name');
  const email = useForm('email');
  const password = useForm('password');
  const [passwordShow, setPasswordShow] = React.useState(false);
  const {userLogin} = React.useContext(UserContext);
  const [errorState, setErrorState] = React.useState<ErrorStateProps | null>(null);

  const { loading, data, error, request } = useFetch();

   const  handleSubmit : React.FormEventHandler<HTMLFormElement> = async (event ) => {
    event.preventDefault();
    

    const { url, options } = USER_REGISTER({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    const {json, response} = await request({url, options});
    
    if(!response.ok) {
      setErrorState(json)
    }
    
    if (response.ok) userLogin({login: email.value, password: password.value, stayLoggedIn: true});
  }

  React.useEffect(() => {
    console.log(errorState)
  })

  return (
    <StyledSignupForm className='signup-form'>
      <div>
        <StyledHeadings as='h2' className='title'>
          {ContentLoginSignupForm.signup.h2}
        </StyledHeadings>
        <StyledHeadings as='h5' className='description'>
          {ContentLoginSignupForm.signup.h4}
        </StyledHeadings>
      </div>

      <form className='form' onSubmit={handleSubmit}>
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

        {errorState && errorState.code === 3033 && <ErrorHandle error={errorState.message}/>}
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

        <Button classed='button'>Signup</Button>
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
