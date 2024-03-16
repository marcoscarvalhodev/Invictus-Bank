import React from 'react';
import { StyledButton } from '../../Styles/Reusable/Button.styled';

type ButtonProps = React.ComponentProps<'button'> & {
  light?: boolean;
  classed?: string;
  onClick?: () => void;
};

const Button = ({ children, light, classed, onClick }: ButtonProps) => {

  return (
    <StyledButton
      className={classed}
      $light={light}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
