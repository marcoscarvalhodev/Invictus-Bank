import React from 'react';
import { StyledContainer } from './Styles/Container.styled.ts';
import Header from './Components/Header/Header.tsx';
import Hero from './Components/Body/Hero/Hero.tsx';

interface ContainerProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = ({setActiveMenu}: ContainerProps) => {
  const [activeBx, setActiveBx] = React.useState(false);
 
  React.useEffect(() => {
    setActiveMenu(activeBx)
  }, [activeBx, setActiveMenu])

  
  return (
    <StyledContainer className={`${activeBx ? 'container-active-bx' : ''}`}>
      <Header setActiveBx={setActiveBx}/>
      <Hero activeBx={activeBx}/>
      
    </StyledContainer>
  );
};

export default Container;
