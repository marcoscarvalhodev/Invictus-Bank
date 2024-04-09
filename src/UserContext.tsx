import React from 'react';
import { careerProps } from './Helper/CareersTypes';
import { USER_LOGIN, USER_GET, TOKEN_VALIDATE_USER } from './Api';

interface userDataProps {
  name: string;
  email: string;
  objectId: string;
  ['user-token']: string;
}

interface UserContextProps {
  userLogin: ({ login, password }: userLoginProps) => Promise<void>;
  loading: boolean;
  loginState: boolean;
  error: () => void;
  data: userDataProps;
}//bigger function

type userLoginProps = {
  login: string;
  password: string;
  stay_logged_in: true;
}//particle from bigger function

interface UserStorageProps {
  children: React.JSX.Element;
}

export const UserContextCareers = React.createContext<careerProps | null>(null);

export const UserContext = React.createContext<UserContextProps | null>(null);


export const UserStorage = ({ children } : UserStorageProps) => {
  const [data, setData] = React.useState<userDataProps>(null);
  const [loginState, setLoginState] = React.useState(null); //check wheter user is logged in or not
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);


  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLoginState(false);
      window.localStorage.removeItem("token");
      
    },
    []
  );


  async function userLogin({ login, password, stay_logged_in }: userLoginProps) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = USER_LOGIN({ login, password, stay_logged_in });
      const userDataRes = await fetch(url, options);
      
      if (!userDataRes.ok)
      throw new Error(`You have entered an invalid username or password`);
      const userData: userDataProps = await userDataRes.json();
      await userGet(userData.objectId);

      window.localStorage.setItem("token", userData['user-token']);
      /*
      navigate("/account");
      */
    } catch (err) {
      setError(err);
      setLoginState(false);
    } finally {
      setLoading(false);
    }
  }

  async function userGet(objectId: string) {
    const { url, options } = USER_GET(objectId);
    const response = await fetch(url, options);
    const json:userDataProps = await response.json();
    setData(json);
    setLoginState(true);
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_USER(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Invalid Token."); //if it is invalid, it will go directly to catch and skip getUser.
          await userGet(token);
        } catch (err) {
          console.log(err)
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLoginState(false);
      }
    }
    autoLogin();
  }, [userLogout]);




  return <UserContext.Provider value={{userLogin, loading, loginState, error, data}}>{children}</UserContext.Provider>;
};
