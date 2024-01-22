import React from 'react';
import { StyledInput } from '../../Styles/Login/Input.styled';
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
      <div className='label-wrapper'>
        <div>
          {icon}
        </div>
        <label htmlFor={name}>
          <StyledTexts $device={smallState} $size='p1'>
            {label}
          </StyledTexts>
        </label>
      </div>
      <input
        id={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className='input'
      />
    </StyledInput>
  );
};

export default Input;
