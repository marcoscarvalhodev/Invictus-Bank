import React from 'react';
import { StyledDropdownItem } from '../../Styles/Reusable/DropdownItem.styled';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

type DropdownProps = React.ComponentProps<'a'> & {
  xsmall?: string;
}

const DropdownItem = ({children, xsmall}: DropdownProps) => {
  return (
    <StyledDropdownItem className='dropdown-item'>

      <StyledTexts as="p" className='nav-link-dropdown' $size="p1" $device="desktop">{children}</StyledTexts>
      
    </StyledDropdownItem>
  );
};

export default DropdownItem;
