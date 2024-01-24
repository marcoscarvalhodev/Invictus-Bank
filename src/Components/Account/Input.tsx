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
}

const Input = ({
  label,
  type,
  name,
  onChange,
  value,
  onBlur,
  smallState,
  icon,
}: InputProps) => {
  return (
    <StyledInput>
      <label htmlFor={name} className='label-wrapper'>
        {icon}
        <StyledTexts $device={smallState} $size='p1'>
          {label}
        </StyledTexts>
      </label>

      <input
        id={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className='input'
        autoComplete='on'
      />
    </StyledInput>
  );
};

export default Input;
