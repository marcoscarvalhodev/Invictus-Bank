import React from 'react';
import { StyledHeadings } from './Styles/Reusable/Headings.styled';

const NoMatch = () => {
  return (
    <div className='container'>
      <StyledHeadings as='h1'>
        Route error: no valid path was found
      </StyledHeadings>
    </div>
  );
};

export default NoMatch;
