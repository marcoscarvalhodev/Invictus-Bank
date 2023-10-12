import React from 'react';
import { StyledMenuMobile } from '../../Styles/Header/MenuMobile.styled';
import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';
import Facebook from '../../assets/svg/icon-facebook.svg?react';
import Twitter from '../../assets/svg/icon-twitter.svg?react';
import Instagram from '../../assets/svg/icon-instagram.svg?react';
import Youtube from '../../assets/svg/icon-youtube.svg?react';
import DropdownItem from '../Reusable/DropdownItem';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

interface MenuProps {
  menuIcon: boolean;
}

const MenuMobile = ({ menuIcon }: MenuProps) => {
  const [menuState, setMenuState] = React.useState(0);
  const menuRef1 = React.useRef<HTMLAnchorElement>(null);
  const menuRef2 = React.useRef<HTMLAnchorElement>(null);
  const menuRef3 = React.useRef<HTMLAnchorElement>(null);

  function verifyMenuState(menuRef: React.MutableRefObject<HTMLAnchorElement>) {
    if (menuState === Number(menuRef.current?.id)) {
      return true;
    } else {
      return false;
    }
  }

  React.useEffect(() => {
    if (!menuIcon) {
      setMenuState(0);
    }
  }, [menuIcon]);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    const linkId = Number(event.currentTarget.id);

    event.preventDefault();
    setMenuState(linkId);

    if (menuState === linkId) {
      setMenuState(0);
    }
  };

  return (
    <StyledMenuMobile
      className={`menu-mobile ${menuIcon ? 'active-menu-mobile' : ''}`}
    >
      <ul className='nav-list-mobile'>
        <li className='dropdown-title'>
          <a
            ref={menuRef1}
            onClick={handleClick}
            id='1'
            href=''
            
            className={`nav-link-mobile ${
              verifyMenuState(menuRef1)
                ? 'nav-link-mobile-active'
                : ''
            }`}
          >
            <StyledHeadings as='h3' $device='desktop'>
              Supreme Bank
            </StyledHeadings>
          </a>

          <ul
            className={`dropdown-wrapper ${
              verifyMenuState(menuRef1)
                ? 'dropdown-wrapper-active'
                : ''
            }`}
          >
            <DropdownItem>Savings</DropdownItem>

            <DropdownItem>Who we are</DropdownItem>

            <DropdownItem>Careers</DropdownItem>
          </ul>
        </li>

        <li className='dropdown-title'>
          <a
            ref={menuRef2}
            onClick={handleClick}
            id='2'
            href=''
            className={`nav-link-mobile ${
              verifyMenuState(menuRef2)
                ? 'nav-link-mobile-active'
                : ''
            }`}
          >
            <StyledHeadings as='h3' $device='desktop'>
              Digital Account
            </StyledHeadings>
          </a>

          <ul
            className={`dropdown-wrapper ${
              verifyMenuState(menuRef2)
                ? 'dropdown-wrapper-active'
                : ''
            }`}
          >
            <DropdownItem>Create your account</DropdownItem>
            <DropdownItem>Transfers</DropdownItem>
            <DropdownItem>Income</DropdownItem>
          </ul>
        </li>

        <li className='dropdown-title'>
          <a
            ref={menuRef3}
            id='3'
            onClick={handleClick}
            href=''
            className={`nav-link-mobile ${
              verifyMenuState(menuRef3)
                ? 'nav-link-mobile-active'
                : ''
            }`}
          >
            <StyledHeadings as='h3' $device='desktop'>
              For you
            </StyledHeadings>
          </a>

          <ul
            className={`dropdown-wrapper ${
              verifyMenuState(menuRef3)
                ? 'dropdown-wrapper-active'
                : ''
            }`}
          >
            <DropdownItem>Community</DropdownItem>
            <DropdownItem>Rewards</DropdownItem>
            <DropdownItem>News</DropdownItem>
          </ul>
        </li>

        <li>
          <a href='' className='nav-link-mobile'>
            <StyledHeadings as='h3' $device='desktop'>
              Join Supreme Bank
            </StyledHeadings>
          </a>
        </li>

        <li className='social-icons'>
          <a href='https://facebook.com' target='_blank'>
            <Facebook />
          </a>
          <a href='https://youtube.com' target='_blank'>
            <Youtube />
          </a>
          <a href='https://www.instagram.com' target='_blank'>
            <Instagram />
          </a>
          <a href='https://twitter.com' target='_blank'>
            <Twitter />
          </a>
        </li>
      </ul>
    </StyledMenuMobile>
  );
};

export default MenuMobile;
