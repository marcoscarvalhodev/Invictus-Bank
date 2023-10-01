import React from "react";
import { StyledNavMobile } from "../Styles/NavMobile.styled";
import Login from "./Login";

const MenuMobile = () => {
  return (
    <StyledNavMobile className="navbar-mobile">
      <div className="bx" id="bx"></div>
      <div className="logo"></div>
      <Login />
    </StyledNavMobile>
  );
};

export default MenuMobile;
