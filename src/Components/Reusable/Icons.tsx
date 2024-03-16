import React from 'react';
import { StyledIcons } from '../../Styles/Reusable/Icons.styled';

type IconsProps = React.ComponentProps<'div'> & {
  inheritedClass?: string;
};

const Icons = ({ children, inheritedClass }: IconsProps) => {
  return <StyledIcons className={inheritedClass}>{children}</StyledIcons>;
};

export default Icons;
