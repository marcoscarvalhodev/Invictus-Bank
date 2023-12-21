import React from 'react';
import { StyledNavMobile } from '../../Styles/Header/NavMobile.styled';
import Logo from '../Reusable/Logo';
import Button from '../Reusable/Button';
import { NavLink } from 'react-router-dom';

interface NavMenuProps {
  setMenuIcon: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveBx: React.Dispatch<React.SetStateAction<boolean>>;
  activeBx: boolean;
}

const NavMenuMobile = ({ setMenuIcon, setActiveBx, activeBx}: NavMenuProps) => {
  

  React.useEffect(() => {
    setMenuIcon(activeBx);
  }, [activeBx, setMenuIcon]);

  const handleClick = () => {
    setActiveBx(!activeBx);
  };
  return (
    <StyledNavMobile className='navbar-mobile'>
      <div
        className={`bx ${activeBx ? 'activeBx' : ''}`}
        id='bx'
        onClick={handleClick}
      ></div>
      <NavLink to="/" end className="logo-sb" onClick={() => setActiveBx(false)}><Logo /></NavLink>
      <Button light={true}>Login</Button>
    </StyledNavMobile>
  );
};

export default NavMenuMobile;
