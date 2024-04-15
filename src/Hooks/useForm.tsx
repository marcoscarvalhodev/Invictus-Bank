import React, { MutableRefObject } from 'react';

interface useFormProps {
  type:
    | 'email'
    | 'email_confirmation'
    | 'name'
    | 'last_name'
    | 'password'
    | 'number'
    | 'residence'
    | '';
  emailRef?: MutableRefObject<HTMLInputElement>;
  confirmEmailRef?: MutableRefObject<HTMLInputElement>;
}

export interface useFormPropsReturn {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error: any;
  emailConfirmation: () => boolean;
  validate: () => boolean;
  onBlur: () => boolean;
}

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Fill in the field with a valid email',
  },
  email_confirmation: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Fill in the field with a valid email',
  },
  password: {
    regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W])(?!.*\s).{8,}$/,
    message:
      'Must contain no less than 1 upper character, 1 lower character, 1 digit, 1 special character. With at least 8 characters.',
  },
  number: {
    regex: /^\d+$/,
    message: 'Only numbers are accepted.',
  },

  name: {
    regex: /^[a-zA-Z]+$/,
    message: 'Only first name is accepted.',
  },

  last_name: {
    regex: /^[a-zA-Z]+$/,
    message: 'Only last name is accepted.',
  },
  residence: {
    regex: /\w([\w\s]*\w)?/,
    message: "Write down your place of residence."
  }
};

const useForm = ({
  type,
  emailRef,
  confirmEmailRef,
}: useFormProps): useFormPropsReturn => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  const emailConfirmation = React.useCallback(() => {
    if (
      emailRef &&
      emailRef.current &&
      confirmEmailRef &&
      confirmEmailRef.current
    ) {
      
      if (emailRef.current.value !== confirmEmailRef.current.value && confirmEmailRef.current.value.length > 0) {
        setError("Email doesn't match, please write same email");
        return false;
      } else {
        setError('');
        return true
      }
    }
    
  }, [emailRef, confirmEmailRef]);

  

  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (error) {
      validate(target.value);
    }
    emailConfirmation();
    setValue(target.value);
  };

  function validate(value: string) {
    const typed = type as keyof typeof types;
    if (type === '') return true;
    if (value.length === 0) {
      setError('Fill in a value in the designed field');
      return false;
    } else if (types[typed] && !types[typed].regex.test(value)) {
      setError(types[typed].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    emailConfirmation: () => emailConfirmation(),
    onBlur: () => validate(value),
  };
};

export default useForm;
