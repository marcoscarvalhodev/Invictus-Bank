import React from 'react';
import { StyledButton } from '../../Styles/Reusable/Button.styled';
import ContainerSizes from '../../ContainerSizes';

type ButtonProps = React.ComponentProps<'a'> & {
  light?: boolean;
}

const Button = ({children, light} : ButtonProps) => {
  const { xsmall } = ContainerSizes();

  return <StyledButton $xsmall={xsmall} $light={light}>{children}</StyledButton>;
};

export default Button;
