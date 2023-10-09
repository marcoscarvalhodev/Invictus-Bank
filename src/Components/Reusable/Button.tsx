import React from 'react';
import { StyledButton } from '../../Styles/Reusable/Button.styled';
import ContainerSizes from '../../ContainerSizes';

const Button = () => {
  const { xsmall } = ContainerSizes();

  return <StyledButton $xsmall={xsmall}>Join Supreme Bank</StyledButton>;
};

export default Button;
