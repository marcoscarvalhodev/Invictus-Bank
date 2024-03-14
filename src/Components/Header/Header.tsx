import React from 'react';
import { StyledHeader } from '../../Styles/Header/Header.styled';

import NavMobile from './NavMobile';
import MenuMobile from './MenuMobile';
import NavDesktop from './NavDesktop';
import ContainerSizes from '../../ContainerSizes';

interface HeaderProps {
  setMobileBx: React.Dispatch<React.SetStateAction<boolean>>;
  mobileBx: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  small: boolean;
}

const Header = ({ setMobileBx, mobileBx, setAccountState, small}: HeaderProps) => {
  const [scroll, setScroll] = React.useState(0);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileDesktop, setMobileDesktop] = React.useState(false);
  const [menuIcon, setMenuIcon] = React.useState(false);
  

  const [activeBx, setActiveBx] = React.useState(false);

  React.useEffect(() => {
    setMobileBx(menuIcon);
  }, [menuIcon, setMobileBx]);

  React.useEffect(() => {
    small ? setMobileDesktop(true) : setMobileDesktop(false);
  }, [setMobileDesktop, small]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);

      scroll > 50 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <StyledHeader
      className={`${scrolled ? 'active-header' : ''} ${
        menuIcon ? 'click-header' : ''
      }`}
    >
      {mobileDesktop && (
        <NavMobile
          setMenuIcon={setMenuIcon}
          activeBx={activeBx}
          setActiveBx={setActiveBx}
          setAccountState={setAccountState}
        />
      )}
      {!mobileDesktop && <NavDesktop setAccountState={setAccountState} />}
      {mobileDesktop && (
        <MenuMobile
          menuIcon={menuIcon}
          setActiveBx={setActiveBx}
          setMobileBx={setMobileBx}
          setMenuIcon={setMenuIcon}
          setAccountState={setAccountState}
        />
      )}
    </StyledHeader>
  );
};

export default Header;
