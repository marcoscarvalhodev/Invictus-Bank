import React from "react";
import { StyledNavMobile } from "../../Styles/Header/NavMobile.styled";
import Login from "../Reusable/Login";
import Logo from "../Reusable/Logo";

interface NavMenuProps {
  setMenuIcon: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const NavMenuMobile = ({ setMenuIcon }: NavMenuProps) => {
  const [activeBx, setActiveBx] = React.useState(false);

  React.useEffect(() => {
    setMenuIcon(activeBx);
  }, [activeBx, setMenuIcon]);

  const handleClick = () => {
    setActiveBx(!activeBx);
  };
  return (
    <StyledNavMobile className="navbar-mobile">
      <div
        className={`bx ${activeBx ? "activeBx" : ""}`}
        id="bx"
        onClick={handleClick}
      ></div>
      <Logo />
      <Login />
    </StyledNavMobile>
  );
};

export default NavMenuMobile;
