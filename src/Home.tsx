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
  smallState: 'desktop' | 'mobile';
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  xsmall: boolean;
  small: boolean;
  xlarge: boolean;
}

const Home = ({
  mobileBx,
  smallState,
  setAccountState,
  xsmall,
  small,
  xlarge,
}: HomeProps) => {
  return (
    <StyledHome className='home'>
      <HeroBackground />
      <Hero
        mobileBx={mobileBx}
        smallState={smallState}
        setAccountState={setAccountState}
        xsmall={xsmall}
        small={small}
        xlarge={xlarge}
      />
      <People smallState={smallState} small={small} xsmall={xsmall} />
      <Advantages smallState={smallState} small={small} xsmall={xsmall} />
      <SupremeApp
        smallState={smallState}
        xsmall={xsmall}
        small={small}
        xlarge={xlarge}
      />
      <DoubleCard smallState={smallState} xsmall={xsmall} small={small} />
      <Testimonials
        smallState={smallState}
        xsmall={xsmall}
        small={small}
        xlarge={xlarge}
      />
      <DownloadApp smallState={smallState} small={small} />
    </StyledHome>
  );
};

export default Home;
