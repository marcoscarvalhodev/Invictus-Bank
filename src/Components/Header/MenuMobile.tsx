import React from 'react';
import { StyledMenuMobile } from '../../Styles/Header/MenuMobile.styled';
import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';
import Facebook from '../../assets/svg/icon-facebook.svg?react';
import Twitter from '../../assets/svg/icon-twitter.svg?react';
import Instagram from '../../assets/svg/icon-instagram.svg?react';
import Youtube from '../../assets/svg/icon-youtube.svg?react';
import DropdownItem from '../Reusable/DropdownItem';

interface MenuProps {
  menuIcon: boolean;
}

const MenuMobile = ({ menuIcon }: MenuProps) => {
  const [menuState, setMenuState] = React.useState(0);
  const menuRef1 = React.useRef<HTMLAnchorElement>(null);
  const menuRef2 = React.useRef<HTMLAnchorElement>(null);
  const menuRef3 = React.useRef<HTMLAnchorElement>(null);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    setMenuState(Number(event.currentTarget.id));
  };

  return (
    
      <StyledMenuMobile
        className={`menu-mobile ${menuIcon ? 'active-menu-mobile' : ''}`}
      >
        <ul className='nav-list-mobile'>
          <li>
            <a
              ref={menuRef1}
              onClick={handleClick}
              id='1'
              href=''
              className={`nav-link-mobile ${
                menuState === Number(menuRef1.current?.id)
                  ? 'dropdown-menu-mobile'
                  : ''
              }`}
            >
              <StyledHeadings as='h3' $device='mobile'>
                Supreme Bank
              </StyledHeadings>
            </a>

            <ul>
              <DropdownItem>Savings</DropdownItem>
              <DropdownItem>Who we are</DropdownItem>
              <DropdownItem>Careers</DropdownItem>
            </ul>
          </li>

          <li>
            <a
              ref={menuRef2}
              onClick={handleClick}
              id='2'
              href=''
              className={`nav-link-mobile ${
                menuState === Number(menuRef2.current?.id)
                  ? 'dropdown-menu-mobile'
                  : ''
              }`}
            >
              <StyledHeadings as='h3' $device='mobile'>
                Digital Account
              </StyledHeadings>
            </a>

            <ul>
              <DropdownItem>Create your account</DropdownItem>
              <DropdownItem>Transfers</DropdownItem>
              <DropdownItem>Income</DropdownItem>
            </ul>
          </li>
          <li>
            <a
              ref={menuRef3}
              id='3'
              onClick={handleClick}
              href=''
              className={`nav-link-mobile ${
                menuState === Number(menuRef3.current?.id)
                  ? 'dropdown-menu-mobile'
                  : ''
              }`}
            >
              <StyledHeadings as='h3' $device='mobile'>
                For you
              </StyledHeadings>
            </a>

            <ul>
              <DropdownItem>Community</DropdownItem>
              <DropdownItem>Rewards</DropdownItem>
              <DropdownItem>News</DropdownItem>
            </ul>
          </li>

          <li>
            <a href='' className='nav-link-mobile'>
              <StyledHeadings as='h3' $device='mobile'>
                Join Supreme Bank
              </StyledHeadings>
            </a>
          </li>

          <li className='social-icons'>
            <a href=''>
              <Facebook />
            </a>
            <a href=''>
              <Youtube />
            </a>
            <a href=''>
              <Instagram />
            </a>
            <a href=''>
              <Twitter />
            </a>
          </li>
        </ul>
      </StyledMenuMobile>
    
  );
};

export default MenuMobile;
