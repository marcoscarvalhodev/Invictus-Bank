import React from "react";
import { StyledNavMobile } from "../Styles/NavMobile.styled";
import Login from "./Login";
import Logo from "./Logo";

interface NavMenuProps {
  setMenuIcon: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile = ({setMenuIcon} : NavMenuProps) => {
  const [activeBx, setActiveBx] = React.useState(false);

  React.useEffect(() => {
    setMenuIcon(activeBx);
  }, [activeBx, setMenuIcon])

  const handleClick = () => {
    setActiveBx(!activeBx);
  }
  return (
    <StyledNavMobile className="navbar-mobile">
      <div className={`bx ${activeBx ? 'activeBx' : ''}`} id="bx" onClick={handleClick}></div>
      <Logo />
      <Login />
    </StyledNavMobile>
  );
};

export default MenuMobile;
