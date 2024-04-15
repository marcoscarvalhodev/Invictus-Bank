import React, { LegacyRef } from 'react';
import { StyledInput } from '../../Styles/Reusable/Input.styled';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

interface InputProps {
  label: string;
  type: string;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  icon?: React.JSX.Element;
  error?: string;
  children?: React.JSX.Element;
  inputPassword?: boolean;
  placeholder?: string;
  reference?: React.MutableRefObject<HTMLInputElement>;
  requiredField?: boolean;
}

const Input = ({
  children,
  label,
  type,
  name,
  onChange,
  value,
  onBlur,
  icon,
  error,
  inputPassword,
  placeholder,
  reference,
  requiredField
  
}: InputProps) => {
  return (
    <StyledInput $inputPassword={inputPassword} className='input-wrapper'>
      <label htmlFor={name} className='label-wrapper'>
        {icon}
        <StyledTexts $size='p1'>{label}</StyledTexts>
        {requiredField && <StyledTexts $size='p1' className='required-field'>*</StyledTexts>}
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
          placeholder={placeholder}
          ref={reference}
        />
        {children}
      </div>
      {error && (
        <StyledTexts $size='p2' className='error-input'>
          {error}
        </StyledTexts>
      )}
    </StyledInput>
  );
};

export default Input;