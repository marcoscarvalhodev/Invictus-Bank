import React from 'react';
import { StyledMenuMobile } from '../Styles/MenuMobile';

const MenuMobile = () => {
  return (
    <StyledMenuMobile className='menu-mobile'>
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
              Join Supreme Bank
            </a>
          </li>
          <li>
            <a href="" className="nav-link-mobile">
              Social Media
            </a>
          </li>
        </ul>
    </StyledMenuMobile>
  )
}

export default MenuMobile