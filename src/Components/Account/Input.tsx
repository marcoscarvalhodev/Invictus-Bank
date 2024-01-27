import React from 'react';
import { StyledInput } from '../../Styles/Account/Input.styled';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

interface InputProps {
  label: string;
  type: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  smallState: 'desktop' | 'mobile';
  icon?: React.JSX.Element;
  error: string;
  children?: React.JSX.Element;
  inputPassword?: boolean;
}

const Input = ({
  children,
  label,
  type,
  name,
  onChange,
  value,
  onBlur,
  smallState,
  icon,
  error,
  inputPassword
}: InputProps) => {
  return (
    <StyledInput $inputPassword={inputPassword}>
      <label htmlFor={name} className='label-wrapper'>
        {icon}
        <StyledTexts $device={smallState} $size='p1'>
          {label}
        </StyledTexts>
      </label>
      <div className='parent-input'>
        <input
          id={name}
          type={type}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          className='input'
          autoComplete='on'
        />
        {children}
      </div>
      {error && (
        <StyledTexts $device={smallState} $size='p2' className='error-input'>
          {error}
        </StyledTexts>
      )}
    </StyledInput>
  );
};

export default Input;
