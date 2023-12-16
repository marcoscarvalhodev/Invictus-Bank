import React from 'react';
import { StyledNavDesktop } from '../../Styles/Header/NavDesktop.styled';
import Button from '../Reusable/Button';
import Login from '../Reusable/Login';
import Logo from '../Reusable/Logo';

import { NavLink } from 'react-router-dom';

const NavDesktop = () => {
  const [dropdownMenu, setDropdownMenu] = React.useState(false);
  const linkRef1 = React.useRef<HTMLLIElement>(null);
  const linkRef2 = React.useRef<HTMLLIElement>(null);
  const linkRef3 = React.useRef<HTMLLIElement>(null);
  const [dropdownState, setDropdownState] = React.useState(0);
  const [menuState, setMenuState] = React.useState(false);

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();
    setDropdownState(Number(event.currentTarget.id));
  };

  const mouseLeft: React.MouseEventHandler<HTMLLIElement> = (event) => {
    setDropdownState(0);
  };

  return (
    <StyledNavDesktop className='navbar-desktop' $dropdown={dropdownMenu}>
      <div className='navbar-desktop-item-1'>
        <NavLink to='/'>
          <Logo />
        </NavLink>
        <ul className='menu-desktop'>
          <li
            className='menu-item'
            id='1'
            onClick={handleClick}
            onMouseOver={handleClick}
            ref={linkRef1}
            onMouseLeave={mouseLeft}
          >
            <a href='' className='nav-link-desktop'>
              Supreme Bank
            </a>
            <ul
              className={`dropdown-menu ${
                Number(linkRef1.current?.id) === dropdownState
                  ? 'active-dropdown'
                  : ''
              }`}
            >
              <li className='dropdown-item'>
                <NavLink to='/savings' className='nav-link-dropdown'>
                  Savings
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <a href='' className='nav-link-dropdown'>
                  Who we are
                </a>
              </li>
              <li className='dropdown-item'>
                <a href='' className='nav-link-dropdown'>
                  Careers
                </a>
              </li>
            </ul>
          </li>

          <li
            className='menu-item'
            id='2'
            onClick={handleClick}
            onMouseOver={handleClick}
            ref={linkRef2}
            onMouseLeave={mouseLeft}
          >
            <a href='' className='nav-link-desktop'>
              Digital Account
            </a>
            <ul
              className={`dropdown-menu ${
                Number(linkRef2.current?.id) === dropdownState
                  ? 'active-dropdown'
                  : ''
              }`}
            >
              <li className='dropdown-item'>
                <a href='' className='nav-link-dropdown'>
                  Create your account
                </a>
              </li>
              <li className='dropdown-item'>
                <a href='' className='nav-link-dropdown'>
                  Transfers
                </a>
              </li>
              <li className='dropdown-item'>
                <a href='' className='nav-link-dropdown'>
                  Income
                </a>
              </li>
            </ul>
          </li>

          <li
            className='menu-item'
            id='3'
            onClick={handleClick}
            onMouseOver={handleClick}
            ref={linkRef3}
            onMouseLeave={mouseLeft}
          >
            <a href='' className='nav-link-desktop'>
              For you
            </a>
            <ul
              className={`dropdown-menu ${
                Number(linkRef3.current?.id) === dropdownState
                  ? 'active-dropdown'
                  : ''
              }`}
            >
              <li className='dropdown-item'>
                <a href='' className='nav-link-dropdown'>
                  Community
                </a>
              </li>
              <li className='dropdown-item'>
                <a href='' className='nav-link-dropdown'>
                  Rewards
                </a>
              </li>
              <li className='dropdown-item'>
                <a href='' className='nav-link-dropdown'>
                  News
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className='navbar-desktop-item-2'>
        <Button />
        <Login />
      </div>
    </StyledNavDesktop>
  );
};

export default NavDesktop;
