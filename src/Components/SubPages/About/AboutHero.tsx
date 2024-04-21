import React from 'react';
import { StyledAboutHero } from '../../../Styles/SubPages/About/AboutHero.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAbout } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

const AboutHero = () => {
  return (
    <StyledAboutHero className='container'>
      <StyledHeadings as='h5'>{ContentAbout.hero.h5_subtitle}</StyledHeadings>
      <StyledHeadings as='h2' className='title'>
        {ContentAbout.hero.h2_title}
      </StyledHeadings>
      <StyledTexts $size='p1'>{ContentAbout.hero.p_description}</StyledTexts>
    </StyledAboutHero>
  );
};

export default AboutHero;
