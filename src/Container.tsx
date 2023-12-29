import React from 'react';
import { StyledContainer } from './Styles/Container.styled.ts';
import Header from './Components/Header/Header.tsx';
import ContainerSizes from './ContainerSizes.tsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.tsx';
import Savings from './Components/SubPages/Savings/Savings.tsx';
import Checking from './Components/SubPages/Checking/Checking.tsx';

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
        <Header setMobileBx={setMobileBx} mobileBx={mobileBx} />

        <Routes>
          <Route
            path='/'
            element={<Home mobileBx={mobileBx} smallState={smallState} />}
          />

          <Route
            path='savings/*'
            element={<Savings smallState={smallState} />}
          />

          <Route path='checking/*' element={<Checking smallState={smallState}/>}/>

        </Routes>
      </BrowserRouter>
    </StyledContainer>
  );
};

export default Container;
