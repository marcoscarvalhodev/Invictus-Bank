/*import React from "react";

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Fill in the field with a valid email'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: 'The password must contain at least 1 upper character, 1 lower character, 1 digit. With at least 8 characters. '
  },
  number: {
    regex: /^\d+$/,
    message: 'Only numbers are accepted'
  }
}

const useForm = (type ?: string) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);
  
  function onChange({target}) {
    if(error) validate(target.value)
    setValue(target.value)
    
  }

  function validate(value : string) {
    const typed = type as keyof typeof types
    if(type === '') return true;
    if(value.length === 0) {
      setError('Fill in a value in the designed field');
      return false
    } else if(types[typed] && !types[typed].regex.test(value)) {
      setError(types[typed].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  return {
    value, 
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
    }
};

export default useForm;
*/