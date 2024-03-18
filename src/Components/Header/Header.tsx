import React from 'react';
import { StyledHeader } from '../../Styles/Header/Header.styled';

import NavMobile from './NavMobile';
import MenuMobile from './MenuMobile';
import NavDesktop from './NavDesktop';

interface HeaderProps {
  setMobileBx: React.Dispatch<React.SetStateAction<boolean>>;
  mobileBx: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ({
  setMobileBx,
  mobileBx,
  setAccountState,
}: HeaderProps) => {
  const [scroll, setScroll] = React.useState(0);
  const [scrolled, setScrolled] = React.useState(false);
  const [menuIcon, setMenuIcon] = React.useState(false);

  const [activeBx, setActiveBx] = React.useState(false);

  React.useEffect(() => {
    setMobileBx(menuIcon);
  }, [menuIcon, setMobileBx]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);

      scroll > 100 ? setScrolled(true) : setScrolled(false);
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
      <NavDesktop setAccountState={setAccountState} />

      <NavMobile
        setMenuIcon={setMenuIcon}
        activeBx={activeBx}
        setActiveBx={setActiveBx}
        setAccountState={setAccountState}
      />
      <MenuMobile
        menuIcon={menuIcon}
        setActiveBx={setActiveBx}
        setMobileBx={setMobileBx}
        setMenuIcon={setMenuIcon}
        setAccountState={setAccountState}
      />
    </StyledHeader>
  );
};

export default Header;
