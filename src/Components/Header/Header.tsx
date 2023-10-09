import React from 'react';
import { StyledHeader } from '../../Styles/Header/Header.styled';

import NavMobile from './NavMobile';
import MenuMobile from './MenuMobile';
import NavDesktop from './NavDesktop';
import ContainerSizes from '../../ContainerSizes';

const Header = () => {
  const [scroll, setScroll] = React.useState(0);
  const [scrolled, setScrolled] = React.useState(false);
  const [headerState, setHeaderState] = React.useState(false);
  const [mobileDesktop, setMobileDesktop] = React.useState(false);
  const [menuIcon, setMenuIcon] = React.useState(false);
  const { small } = ContainerSizes();

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
      {mobileDesktop && <NavMobile setMenuIcon={setMenuIcon} />}
      {!mobileDesktop && <NavDesktop />}
      {mobileDesktop && <MenuMobile menuIcon={menuIcon} />}
    </StyledHeader>
  );
};

export default Header;
