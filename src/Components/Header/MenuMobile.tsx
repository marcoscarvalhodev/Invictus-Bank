import React from 'react';
import { StyledMenuMobile } from '../../Styles/Header/MenuMobile.styled';
import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';
import Facebook from '../../assets/svg/icon-facebook.svg?react';
import Twitter from '../../assets/svg/icon-twitter.svg?react';
import Instagram from '../../assets/svg/icon-instagram.svg?react';
import Youtube from '../../assets/svg/icon-youtube.svg?react';
import DropdownItem from '../Reusable/DropdownItem';
import { ContentNavMobile } from '../../Contents';
import { NavLink } from 'react-router-dom';
import useRefs from '../Reusable/useRefs';

interface MenuProps {
  menuIcon: boolean;
  setMobileBx: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuIcon: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveBx: React.Dispatch<React.SetStateAction<boolean>>;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
}

const MenuMobile = ({ menuIcon, setMobileBx, setMenuIcon, setActiveBx, setAccountState }: MenuProps) => {
  const [menuState, setMenuState] = React.useState(0);
  const itemsRef = React.useRef([]);
  const { refsByKey, setRef } = useRefs();
  const refs = Object.values(refsByKey).filter(Boolean);

  const buttonDisable = () => {
    setMobileBx(false);
    setMenuIcon(false);
    setActiveBx(false);
    setMenuState(0);
  }

  const verifyMenuState = (menuRef: HTMLElement) => {
    if (menuRef) {
      if (menuState === Number(menuRef.id)) {
        return true;
      } else {
        return false;
      }
    }
  };

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    const linkId = Number(event.currentTarget.id);
    console.log(linkId)
    event.preventDefault();
    setMenuState(linkId);

    if (menuState === linkId) {
      setMenuState(0);
    }
  };

  const handleJoinClick = () => {
    setAccountState(2);
    buttonDisable();
  }

  React.useEffect(() => {
    itemsRef.current = itemsRef.current.slice(
      0,
      ContentNavMobile.nav_mobile.length
    );
  }, [itemsRef]);

  return (
    <StyledMenuMobile
      className={`menu-mobile ${menuIcon ? 'active-menu-mobile' : ''}`}
    >
      <ul className='nav-list-mobile'>
        {ContentNavMobile.nav_mobile.map(({ id, pages, title_link }) => {
          return (
            <li key={id} className='dropdown-title'>
              <a
                id={id}
                href=''
                ref={(el) => setRef(el, id)}
                onClick={handleClick}
                className={`nav-link-mobile ${
                  verifyMenuState(refs[Number(id) - 1])
                    ? 'nav-link-mobile-active'
                    : ''
                }`}
              >
                <StyledHeadings as='h3' $device='desktop'>
                  {title_link}
                </StyledHeadings>
              </a>

              <ul
                className={`dropdown-wrapper ${
                  verifyMenuState(refs[Number(id) - 1])
                    ? 'dropdown-wrapper-active'
                    : ''
                }`}
              >
                <NavLink to={pages.page_1.url} onClick={pages.page_1.signup && handleJoinClick}>
                  <DropdownItem >{pages.page_1.link}</DropdownItem>
                </NavLink>

                <NavLink to={pages.page_2.url} onClick={buttonDisable}>
                  <DropdownItem>{pages.page_2.link}</DropdownItem>
                </NavLink>

                <NavLink to={pages.page_3.url} onClick={buttonDisable}>
                  <DropdownItem>{pages.page_3.link}</DropdownItem>
                </NavLink>
              </ul>
            </li>
          );
        })}

        <li>
          <NavLink to="/account" className='nav-link-mobile' onClick={handleJoinClick}>
            <StyledHeadings as='h3' $device='desktop'>
              Join Supreme Bank
            </StyledHeadings>
          </NavLink>
        </li>

        <li className='social-icons'>
          <a href='https://facebook.com' target='_blank'>
            <Facebook />
          </a>
          <a href='https://youtube.com' target='_blank'>
            <Youtube />
          </a>
          <a href='https://www.instagram.com' target='_blank'>
            <Instagram />
          </a>
          <a href='https://twitter.com' target='_blank'>
            <Twitter />
          </a>
        </li>
      </ul>
    </StyledMenuMobile>
  );
};

export default MenuMobile;
