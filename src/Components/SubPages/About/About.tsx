import React from 'react';
import { StyledAbout } from '../../../Styles/SubPages/About/About.styled';
import AboutHero from './AboutHero';
import AboutBullets from './AboutBullets';
import AboutPhotos from './AboutPhotos';
import Head from '../../../Helper/Head';
const About = () => {
  return (
    <StyledAbout>
      <Head title='About' description='About section of Supreme Bank application'/>
      <AboutHero />
      <AboutBullets />
      <AboutPhotos />
    </StyledAbout>
  );
};

export default About;
