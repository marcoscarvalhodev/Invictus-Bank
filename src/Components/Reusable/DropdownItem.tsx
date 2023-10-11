import React from 'react';
import { StyledDropdownItem } from '../../Styles/Reusable/DropdownItem.styled';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

type DropdownProps = React.ComponentProps<'a'> & {
  xsmall?: string;
}

const DropdownItem = ({children, xsmall}: DropdownProps) => {
  return (
    <StyledDropdownItem className='dropdown-item'>

      <StyledTexts href='' as="a" className='nav-link-dropdown' $size="p1" $device="mobile">{children}</StyledTexts>
      
    </StyledDropdownItem>
  );
};

export default DropdownItem;
