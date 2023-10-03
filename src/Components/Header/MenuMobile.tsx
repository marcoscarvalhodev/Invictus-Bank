import React from "react";
import { StyledMenuMobile } from "../../Styles/Header/MenuMobile.styled";
import { StyledHeadings } from "../../Styles/Reusable/Headings.styled";
import Facebook from "../../assets/svg/icon-facebook.svg?react";
import Twitter from "../../assets/svg/icon-twitter.svg?react";
import Instagram from "../../assets/svg/icon-instagram.svg?react";
import Youtube from "../../assets/svg/icon-youtube.svg?react";

interface MenuProps {
  menuIcon: boolean;
}

const MenuMobile = ({ menuIcon }: MenuProps) => {
  return (
    <>
      <StyledMenuMobile
        className={`menu-mobile ${menuIcon ? "active-menu-mobile" : ""}`}
      >
        <ul className="nav-list-mobile">
          <li>
            <a href="" className="nav-link-mobile">
              <StyledHeadings as="h3" $device="desktop">
                Supreme Bank
              </StyledHeadings>
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
              <StyledHeadings as="h3" $device="desktop">
                Digital Account
              </StyledHeadings>
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
              <StyledHeadings as="h3" $device="desktop">
                For you
              </StyledHeadings>
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
              <StyledHeadings as="h3" $device="desktop">
                Join Supreme Bank
              </StyledHeadings>
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
              <StyledHeadings as="h3" $device="desktop">
                Social Media
              </StyledHeadings>
            </a>
          </li>

          <li className="social-icons">
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Youtube />
            </a>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Twitter />
            </a>
          </li>
        </ul>
      </StyledMenuMobile>
    </>
  );
};

export default MenuMobile;
