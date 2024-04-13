import React from 'react';
import { StyledButton } from '../../Styles/Reusable/Button.styled';

type ButtonProps = React.ComponentProps<'button'> & {
  loading?: boolean;
  light?: boolean;
  classed?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  light,
  classed,
  onClick,
  loading,
}: ButtonProps) => {

  if (loading)
    return (
      <StyledButton
        onClick={onClick}
        className={classed}
        $light={light}
        disabled={true}
      >
        ...Loading
      </StyledButton>
    );
  return (
    <StyledButton className={classed} $light={light} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
