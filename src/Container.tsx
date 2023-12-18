import React from 'react';
import { StyledContainer } from './Styles/Container.styled.ts';
import Header from './Components/Header/Header.tsx';
import ContainerSizes from './ContainerSizes.tsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.tsx';
import Savings from './Components/SubPages/Savings/Savings.tsx';

interface ContainerProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = ({ setActiveMenu }: ContainerProps) => {
  const [activeBx, setActiveBx] = React.useState(false);
  const { small, xsmall } = ContainerSizes();
  const [smallState, setSmallState] = React.useState<'mobile' | 'desktop'>();

  React.useEffect(() => {
    small ? setSmallState('mobile') : setSmallState('desktop');
  }, [small]);

  React.useEffect(() => {
    setActiveMenu(activeBx);
  }, [activeBx, setActiveMenu]);

  return (
    <StyledContainer className={`${activeBx ? 'container-active-bx' : ''}`}>
      <BrowserRouter>
        <Header setActiveBx={setActiveBx} />

        <Routes>
          <Route
            path='/'
            element={<Home activeBx={activeBx} smallState={smallState} />}
          />

          <Route path='savings/*' element={<Savings smallState={smallState}/>} />
        
        </Routes>
      </BrowserRouter>
    </StyledContainer>
  );
};

export default Container;
