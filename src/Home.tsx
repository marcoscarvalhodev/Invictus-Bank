import React from 'react';

import SupremeApp from './Components/Home/SupremeApp/SupremeApp.tsx';
import DoubleCard from './Components/Home/DoubleCard/DoubleCard.tsx';
import DownloadApp from './Components/Home/DownloadApp/DownloadApp.tsx';
import Hero from './Components/Home/Hero/Hero.tsx';
import HeroBackground from './Components/Home/Hero/HeroBackground.tsx';
import People from './Components/Home/People/People.tsx';
import Advantages from './Components/Home/Advantages/Advantages.tsx';
import Testimonials from './Components/Home/Testimonials/Testimonials.tsx';
import { StyledHome } from './Styles/Home.styled.tsx';

interface HomeProps {
  mobileBx: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  xsmall: boolean;
  small: boolean;
  xlarge: boolean;
  loginState: boolean;
}

const Home = ({
  mobileBx,
  setAccountState,
  xsmall,
  small,
  xlarge,
  loginState,
}: HomeProps) => {
  return (
    <StyledHome className='home'>
      <HeroBackground />
      <Hero
        mobileBx={mobileBx}
        setAccountState={setAccountState}
        loginState={loginState}
      />
      <People small={small} xsmall={xsmall} />
      <Advantages />
      <SupremeApp />
      <DoubleCard />
      <Testimonials xsmall={xsmall} small={small} xlarge={xlarge} />
      <DownloadApp />
    </StyledHome>
  );
};

export default Home;
