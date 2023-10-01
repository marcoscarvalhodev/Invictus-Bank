import React from 'react';
import { StyledNavDesktop } from '../Styles/NavDesktop';
import Button from "./Button";
import Login from "./Login";


const NavDesktop = () => {
  return (
    <StyledNavDesktop className="navbar-desktop">
      <div className="navbar-desktop-item-1">
          <div className="logo"></div>
          <ul className="menu-desktop">
            <li className="menu-item">
              <a href="" className="nav-link-desktop">
                Supreme Bank
              </a>
              <ul className="dropdown-menu" >
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

    </StyledNavDesktop>
  )
}

export default NavDesktop