import React from 'react';
import { StyledContainer } from './Styles/Container.styled.ts';
import Header from './Components/Header/Header.tsx';
import ScrollToTop from './Hooks/scrollToTop.tsx';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';

interface ContainerProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  xsmall: boolean;
  small: boolean;
  medium: boolean;
  large: boolean;
  xlarge: boolean;
}

const Container = ({
  setActiveMenu,
  xsmall,
  small,
  medium,
  large,
  xlarge,
}: ContainerProps) => {
  const [mobileBx, setMobileBx] = React.useState(false);
  const [accountState, setAccountState] = React.useState(1);

  React.useEffect(() => {
    setActiveMenu(mobileBx);
  }, [mobileBx, setActiveMenu]);

  return (
    <StyledContainer className={`${mobileBx ? 'container-active-bx' : ''}`}>
      <BrowserRouter>
        <ScrollToTop />

        <Header
          setMobileBx={setMobileBx}
          mobileBx={mobileBx}
          setAccountState={setAccountState}
        />

        <AppRoutes
          mobileBx={mobileBx}
          setAccountState={setAccountState}
          accountState={accountState}
          xsmall={xsmall}
          small={small}
          medium={medium}
          large={large}
          xlarge={xlarge}
        />
      </BrowserRouter>
    </StyledContainer>
  );
};

export default Container;
