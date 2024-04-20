type registerProps = {
  name: string;
  email: string;
  password: string;
};

type loginProps = {
  login: string;
  password: string;
  stayLoggedIn: true;
};

const API_URL = 'https://toughattack.backendless.app';

export function USER_LOGIN(body: loginProps) {
  return {
    url: API_URL + '/api/users/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
} //for login of existing users

export function USER_REGISTER(body: registerProps) {
  return {
    url: API_URL + '/api/users/register',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
} //for signing up unexisting users

export function USER_GET(ID: string) {
  return {
    url: API_URL + `/api/users/${ID}`,
    options: {
      method: 'GET',
      
    },
  };
} //for retrieving data of existing users

export function TOKEN_VALIDATE_USER(token: string) {
  return {
    url: API_URL + `/api/users/isvalidusertoken/${token}`,
    options: {
      method: 'GET',
      
    },
  };
}
