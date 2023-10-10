import React from 'react';
import { StyledDropdownItem } from '../../Styles/Reusable/DropdownItem.styled';

type DropdownProps = React.ComponentProps<'a'> & {
  xsmall?: string;
}

const DropdownItem = ({children, xsmall}: DropdownProps) => {
  return (
    <StyledDropdownItem className='dropdown-item'>
      <a href='' className='nav-link-dropdown'>
        {children}
      </a>
    </StyledDropdownItem>
  );
};

export default DropdownItem;
