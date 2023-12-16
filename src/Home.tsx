import React from 'react';

import SupremeApp from './Components/Body/SupremeApp/SupremeApp.tsx';
import DoubleCard from './Components/Body/DoubleCard/DoubleCard.tsx';
import DownloadApp from './Components/Body/DownloadApp/DownloadApp.tsx';
import Hero from './Components/Body/Hero/Hero.tsx';
import HeroBackground from './Components/Body/Hero/HeroBackground.tsx';
import People from './Components/Body/People/People.tsx';
import Advantages from './Components/Body/Advantages/Advantages.tsx';
import Testimonials from './Components/Body/Testimonials/Testimonials.tsx';

interface HomeProps {
  activeBx: boolean;
  smallState: "desktop" | "mobile";
}

const Home = ({activeBx, smallState} : HomeProps) => {
  return (
    <main>
      <HeroBackground />
      <Hero activeBx={activeBx} smallState={smallState} />
      <People smallState={smallState} />
      <Advantages smallState={smallState} />
      <SupremeApp smallState={smallState} />
      <DoubleCard smallState={smallState} />
      <Testimonials smallState={smallState} />
      <DownloadApp smallState={smallState} />
    </main>
  );
};

export default Home;
