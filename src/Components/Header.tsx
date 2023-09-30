import React from "react";
import { StyledHeader } from "../Styles/Header.styled";
import Button from "./Button";
import Login from "./Login";

const Header = () => {
  const [scroll, setScroll] = React.useState(0);
  const [scrolled, setScrolled] = React.useState(false);
  const [headerState, setHeaderState] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);

      scroll > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <StyledHeader className={scrolled ? "active-header" : ""}>
      <nav className="navbar-mobile">
        <div className="bx" id="bx"></div>
        <div className="logo"></div>
        <Login />
      </nav>

      <nav className="navbar-desktop">
        <div className="navbar-desktop-item-1">
          <div className="logo"></div>
          <ul className="menu-desktop">
            <li className="menu-item">
              <a href="" className="nav-link-desktop">
                Supreme Bank
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="" className="nav-link-dropdown">
                    Us
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="" className="nav-link-dropdown">
                    Careers
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="" className="nav-link-dropdown">
                    Press
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <a href="" className="nav-link-desktop">
                Digital Account
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="" className="nav-link-dropdown">
                    Create your account
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="" className="nav-link-dropdown">
                    Transfers
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="" className="nav-link-dropdown">
                    Income
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <a href="" className="nav-link-desktop">
                For you
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="" className="nav-link-dropdown">
                    Community
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="" className="nav-link-dropdown">
                    Rewards
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="" className="nav-link-dropdown">
                    News
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navbar-desktop-item-2">
          <Button />
          <Login />
        </div>
      </nav>

      <nav className="menu-mobile">
        <ul className="nav-list-mobile">
          <li>
            <a href="" className="nav-link-mobile">
              Supreme Bank
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
              Digital Account
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
              For you
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
              Join Nubank
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
              Social Media
            </a>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
