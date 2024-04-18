import React from 'react';
import { StyledNavDesktop } from '../../Styles/Header/NavDesktop.styled';
import Button from '../Reusable/Button';
import Logo from '../Reusable/Logo';
import { NavLink } from 'react-router-dom';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

import UserIcon from '../../assets/svg/login/user.svg?react';

interface NavDesktopProps {
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  loginState: boolean;
  userName: string;
  userLogout: () => Promise<void>;
}

const NavDesktop = ({
  setAccountState,
  loginState,
  userName,
  userLogout,
}: NavDesktopProps) => {
  const [dropdownMenu, setDropdownMenu] = React.useState(false);
  const linkRef1 = React.useRef<HTMLLIElement>(null);
  const linkRef2 = React.useRef<HTMLLIElement>(null);
  const linkRef3 = React.useRef<HTMLLIElement>(null);
  const [dropdownState, setDropdownState] = React.useState(0);

  const handleClick: React.MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();
    setDropdownState(Number(event.currentTarget.id));
  };

  const handleLogout = async () => {
    await userLogout();
  };

  const mouseLeft: React.MouseEventHandler<HTMLLIElement> = (event) => {
    setDropdownState(0);
  };

  return (
    <StyledNavDesktop className='navbar-desktop' $dropdown={dropdownMenu}>
      <div className='navbar-desktop-item-1'>
        <NavLink to='/' end className='logo-sb'>
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
                <NavLink to='/checking' className='nav-link-dropdown'>
                  Checking
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/cards' className='nav-link-dropdown'>
                  Cards
                </NavLink>
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
                <NavLink
                  to='/account'
                  className='nav-link-dropdown'
                  onClick={() => setAccountState(2)}
                >
                  Create your account
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/transfers' className='nav-link-dropdown'>
                  Transfers
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/deposits' className='nav-link-dropdown'>
                  Deposits
                </NavLink>
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
                <NavLink to='/rewards' className='nav-link-dropdown'>
                  Rewards
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to='/careers' className='nav-link-dropdown'>
                  Careers
                </NavLink>
              </li>
              <li className='dropdown-item'>
                <NavLink to="/about" className='nav-link-dropdown'>
                  About us
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {loginState ? (
        <div className='username-wrapper'>
          <div className='icon-wrapper'>
            <UserIcon className='user-icon' />
            <StyledTexts className='username' $size='custom' $fontSize={22}>
              {userName}
            </StyledTexts>
          </div>

          <Button className='button-logout' light={true} onClick={handleLogout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className='navbar-desktop-item-2'>
          <NavLink to='/account' onClick={() => setAccountState(2)}>
            <Button>Join Supreme Bank</Button>
          </NavLink>
          <NavLink to='/account' onClick={() => setAccountState(1)}>
            <Button light={true}>Login</Button>
          </NavLink>
        </div>
      )}
    </StyledNavDesktop>
  );
};

export default NavDesktop;
