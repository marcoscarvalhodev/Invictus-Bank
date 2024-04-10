import React from 'react';
import { StyledNavMobile } from '../../Styles/Header/NavMobile.styled';
import Logo from '../Reusable/Logo';
import Button from '../Reusable/Button';
import { NavLink } from 'react-router-dom';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

import UserIcon from '../../assets/svg/login/user.svg?react';

interface NavMenuProps {
  setMenuIcon: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveBx: React.Dispatch<React.SetStateAction<boolean>>;
  activeBx: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  loginState: boolean;
  userName: string;
  userLogout: () => Promise<void>;
}

const NavMenuMobile = ({
  setMenuIcon,
  setActiveBx,
  activeBx,
  setAccountState,
  loginState,
  userName,
  userLogout
}: NavMenuProps) => {
  React.useEffect(() => {
    setMenuIcon(activeBx);
  }, [activeBx, setMenuIcon]);

  const handleClick = () => {
    setActiveBx(!activeBx);
  };

  const handleLogout = async () => {
    await userLogout();
    setActiveBx(false);
  }

  return (
    <StyledNavMobile className='navbar-mobile'>
      <div
        className={`bx ${activeBx ? 'activeBx' : ''}`}
        id='bx'
        onClick={handleClick}
      ></div>
      <NavLink
        to='/'
        end
        className='logo-sb'
        onClick={() => setActiveBx(false)}
      >
        <Logo />
      </NavLink>
      {loginState ? (
        <div className='username-wrapper'>
          {activeBx ? <Button light={true} onClick={handleLogout}>Logout</Button> :<div className='icon-wrapper'>
            <UserIcon className='user-icon' />
            <StyledTexts className='username' $size='custom' $fontSize={22}>
              {userName}
            </StyledTexts>
          </div>}
        </div>
      ) : (
        <NavLink to='/account' onClick={() => setAccountState(1)}>
          <Button light={true}>Login</Button>
        </NavLink>
      )}
    </StyledNavMobile>
  );
};

export default NavMenuMobile;
