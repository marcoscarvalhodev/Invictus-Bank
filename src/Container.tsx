import React from 'react';
import { StyledContainer } from './Styles/Container.styled.ts';
import Header from './Components/Header/Header.tsx';
import Hero from './Components/Body/Hero/Hero.tsx';
import HeroBackground from './Components/Body/Hero/HeroBackground.tsx';
import People from './Components/Body/People/People.tsx';
import Advantages from './Components/Body/Advantages/Advantages.tsx';
import Testimonials from './Components/Body/Testimonials/Testimonials.tsx';
import ContainerSizes from './ContainerSizes.tsx';
import SupremeApp from './Components/Body/SupremeApp/SupremeApp.tsx';

interface ContainerProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Container = ({ setActiveMenu }: ContainerProps) => {
  const [activeBx, setActiveBx] = React.useState(false);
  const { small, xsmall } = ContainerSizes();
  const [smallState, setSmallState] = React.useState<'mobile' | 'desktop'>();

  React.useEffect(() => {
    small ? setSmallState('mobile') : setSmallState('desktop');
  }, [small])

  React.useEffect(() => {
    setActiveMenu(activeBx);
  }, [activeBx, setActiveMenu]);

  return (
    <StyledContainer className={`${activeBx ? 'container-active-bx' : ''}`}>
      <Header setActiveBx={setActiveBx} />
      <HeroBackground />
      <Hero activeBx={activeBx} smallState={smallState}/>
      <People smallState={smallState}/>
      <Advantages smallState={smallState}/>
      <SupremeApp smallState={smallState}/>
      <Testimonials smallState={smallState}/>
      
    </StyledContainer>
  );
};

export default Container;
