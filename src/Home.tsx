import React from 'react';

import SupremeApp from './Components/Home/SupremeApp/SupremeApp.tsx';
import DoubleCard from './Components/Home/DoubleCard/DoubleCard.tsx';
import DownloadApp from './Components/Home/DownloadApp/DownloadApp.tsx';
import Hero from './Components/Home/Hero/Hero.tsx';
import HeroBackground from './Components/Home/Hero/HeroBackground.tsx';
import People from './Components/Home/People/People.tsx';
import Advantages from './Components/Home/Advantages/Advantages.tsx';
import Testimonials from './Components/Home/Testimonials/Testimonials.tsx';

interface HomeProps {
  mobileBx: boolean;
  smallState: "desktop" | "mobile";
}

const Home = ({mobileBx, smallState} : HomeProps) => {
  return (
    <main>
      <HeroBackground />
      <Hero mobileBx={mobileBx} smallState={smallState} />
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
