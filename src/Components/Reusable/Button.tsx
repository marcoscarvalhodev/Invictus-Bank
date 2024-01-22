import React from 'react';
import { StyledButton } from '../../Styles/Reusable/Button.styled';
import ContainerSizes from '../../ContainerSizes';

type ButtonProps = React.ComponentProps<'button'> & {
  light?: boolean;
  classed?: string;
}

const Button = ({children, light, classed} : ButtonProps) => {
  const { xsmall } = ContainerSizes();

  return <StyledButton className={classed} $xsmall={xsmall} $light={light}>{children}</StyledButton>;
};

export default Button;
