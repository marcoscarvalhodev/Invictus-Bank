import React from 'react';
import { StyledButton } from '../../Styles/Reusable/Button.styled';
import ContainerSizes from '../../ContainerSizes';

type ButtonProps = React.ComponentProps<'button'> & {
  light?: boolean;
  classed?: string;
  onClick?: () => void;
};

const Button = ({ children, light, classed, onClick }: ButtonProps) => {
  const { xsmall } = ContainerSizes();

  return (
    <StyledButton
      className={classed}
      $xsmall={xsmall}
      $light={light}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
