import React from 'react';
import { StyledContainer } from './Styles/Container.styled.ts';
import Header from './Components/Header/Header.tsx';
import Hero from './Components/Body/Hero/Hero.tsx';
import HeroBackground from './Components/Body/Hero/HeroBackground.tsx';
import People from './Components/Body/People/People.tsx';
import Advantages from './Components/Body/Advantages/Advantages.tsx';
import Slides from './Components/Body/Slides/Slides.tsx';

interface ContainerProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = ({ setActiveMenu }: ContainerProps) => {
  const [activeBx, setActiveBx] = React.useState(false);

  React.useEffect(() => {
    setActiveMenu(activeBx);
  }, [activeBx, setActiveMenu]);

  return (
    <StyledContainer className={`${activeBx ? 'container-active-bx' : ''}`}>
      <Header setActiveBx={setActiveBx} />
      <HeroBackground />
      <Hero activeBx={activeBx} />
      <People />
      <Advantages />
      <Slides />
    </StyledContainer>
  );
};

export default Container;
