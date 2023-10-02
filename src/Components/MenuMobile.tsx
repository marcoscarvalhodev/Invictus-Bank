import React from 'react';
import { StyledMenuMobile } from '../Styles/MenuMobile.styled';
import { StyledHeadings } from '../Styles/Headings.styled';

interface MenuProps {
  menuIcon: boolean;
}

const MenuMobile = ({menuIcon} : MenuProps) => {
  
  return (
    <>
   <StyledMenuMobile className={`menu-mobile ${menuIcon ? 'active-menu-mobile' : ''}`}>
      <ul className="nav-list-mobile">
          <li>
            <a href="" className="nav-link-mobile">
             <StyledHeadings as="h3" $device='desktop'>Supreme Bank</StyledHeadings>
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
              <StyledHeadings as="h3" $device='desktop'>Digital Account</StyledHeadings>
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
            <StyledHeadings as="h3" $device='desktop'>For you</StyledHeadings>
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
            <StyledHeadings as="h3" $device='desktop'>Join Supreme Bank</StyledHeadings>
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
            <StyledHeadings as="h3" $device='desktop'>Social Media</StyledHeadings>
            </a>
          </li>
        </ul>
    </StyledMenuMobile>

    </>
  )
}

export default MenuMobile