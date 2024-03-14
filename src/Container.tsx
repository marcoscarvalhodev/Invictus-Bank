import React from 'react';
import { StyledContainer } from './Styles/Container.styled.ts';
import Header from './Components/Header/Header.tsx';
import ContainerSizes from './ContainerSizes.tsx';
import ScrollToTop from './Hooks/scrollToTop.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';

interface ContainerProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  xsmall: boolean;
  small: boolean;
  medium: boolean;
  large: boolean;
  xlarge: boolean;
  smallState: 'desktop' | 'mobile';
  smallMediumState: 'desktop' | 'mobile';
}

const Container = ({
  setActiveMenu,
  xsmall,
  small,
  medium,
  large,
  xlarge,
  smallState,
  smallMediumState,
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
          small={small}
        />

        <AppRoutes
          smallMediumState={smallMediumState}
          smallState={smallState}
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
