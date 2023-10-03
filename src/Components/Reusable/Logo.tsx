import React from "react";
import { StyledLogo } from "../../Styles/Reusable/Logo.styled";
import SupremeLogo from "../../assets/svg/logosb.svg?react";

const Logo = () => {
  return (
    <StyledLogo>
      <a href="">
        <SupremeLogo />
      </a>
    </StyledLogo>
  );
};

export default Logo;
