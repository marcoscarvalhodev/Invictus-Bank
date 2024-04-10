import React from 'react';
import { StyledTexts } from '../Styles/Reusable/Texts.styled';
import { StyledError } from '../Styles/Reusable/Error.styled';

interface ErrorProps {
  error: string;
}

const ErrorHandle = ({ error }: ErrorProps) => {
  return (
    <StyledError>
      <StyledTexts $size='p2' className='error-input'>
        {error}
      </StyledTexts>
    </StyledError>
  );
};

export default ErrorHandle;
