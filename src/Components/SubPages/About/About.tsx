import React from 'react'
import { StyledAbout } from '../../../Styles/SubPages/About/About.styled'
import AboutHero from './AboutHero'
import AboutBullets from './AboutBullets'
import AboutPhotos from './AboutPhotos'
const About = () => {
  return (
    <StyledAbout>
      <AboutHero />
      <AboutBullets />
      <AboutPhotos />
    </StyledAbout>
  )
}

export default About