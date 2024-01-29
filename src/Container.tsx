import React from 'react';
import { StyledContainer } from './Styles/Container.styled.ts';
import Header from './Components/Header/Header.tsx';
import ContainerSizes from './ContainerSizes.tsx';
import ScrollToTop from './Hooks/scrollToTop.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';

interface ContainerProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = ({ setActiveMenu }: ContainerProps) => {
  const [mobileBx, setMobileBx] = React.useState(false);
  const { small, medium, xsmall } = ContainerSizes();
  const [smallState, setSmallState] = React.useState<'mobile' | 'desktop'>();
  const [smallMediumState, setSmallMediumState] = React.useState<'mobile' | 'desktop'>();
  const [accountState, setAccountState] = React.useState(1);

  React.useEffect(() => {
    small ? setSmallState('mobile') : setSmallState('desktop');

    small || medium ? setSmallMediumState('mobile') : setSmallMediumState('desktop')
    
    

  }, [small, medium, smallMediumState]);

  React.useEffect(() => {
    setActiveMenu(mobileBx);
  }, [mobileBx, setActiveMenu]);

  return (
    <StyledContainer className={`${mobileBx ? 'container-active-bx' : ''}`}>
      <BrowserRouter>
        <ScrollToTop />

        <Header setMobileBx={setMobileBx} mobileBx={mobileBx} setAccountState={setAccountState}/>

        <AppRoutes smallMediumState={smallMediumState} smallState={smallState} mobileBx={mobileBx} setAccountState={setAccountState} accountState={accountState}/>
      </BrowserRouter>
    </StyledContainer>
  );
};

export default Container;
