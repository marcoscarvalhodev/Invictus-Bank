import React from "react";
import { StyledHero } from "../../Styles/Hero/Hero.styled";
import { StyledHeadings } from "../../Styles/Reusable/Headings.styled";
import { StyledTexts } from "../../Styles/Reusable/Texts.styled";
import Button from "../Reusable/Button";
import AppStore from "../../assets/svg/appstore.svg?react";
import PlayStore from "../../assets/svg/playstore.svg?react";

interface HeroProps {
  small: boolean | null;
}

const Hero = ({ small } : HeroProps) => {
  return (
    <StyledHero className={`container ${small ? 'container-small' : ''}`}>
      <div className="flex-item-1">
        <StyledHeadings as="h1" $device="desktop">
          Welcome to Supreme Bank: Your financial future starts here.
        </StyledHeadings>
        <StyledTexts $size="p1" $device="desktop">
          High-yield savings account, credit card with no annual fee and no
          joining fee, and the best: set up everything in the App.
        </StyledTexts>

        <div>
          <Button />
          <a href="">
            <AppStore />
          </a>
          <a href="">
            <PlayStore />
          </a>
        </div>
      </div>

      <div className="flex-item-3"></div>
    </StyledHero>
  );
};

export default Hero;
