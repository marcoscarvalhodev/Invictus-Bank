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
  const { small, xsmall } = ContainerSizes();
  const [smallState, setSmallState] = React.useState<'mobile' | 'desktop'>();

  React.useEffect(() => {
    small ? setSmallState('mobile') : setSmallState('desktop');
  }, [small]);

  React.useEffect(() => {
    setActiveMenu(mobileBx);
  }, [mobileBx, setActiveMenu]);

  return (
    <StyledContainer className={`${mobileBx ? 'container-active-bx' : ''}`}>
      <BrowserRouter>
        <ScrollToTop />

        <Header setMobileBx={setMobileBx} mobileBx={mobileBx} />

        <AppRoutes smallState={smallState} mobileBx={mobileBx} />
      </BrowserRouter>
    </StyledContainer>
  );
};

export default Container;
