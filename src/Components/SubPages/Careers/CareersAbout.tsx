import React from 'react';
import { StyledCareersAbout } from '../../../Styles/SubPages/Careers/CareersAbout.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentCareers } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { NavLink } from 'react-router-dom';

const CareersAbout = () => {
  return (
    <StyledCareersAbout>
      <StyledHeadings as='h4'>
        {ContentCareers.careersDetailAbout.about_company.title}
      </StyledHeadings>

      <StyledTexts $size='p4'>
        {ContentCareers.careersDetailAbout.about_company.description}
      </StyledTexts>

      <NavLink to="/about">
        <StyledTexts
          $arrow={true}
          $link={true}
          $size='p1'
          className='careers-about-button'
        >
          {ContentCareers.careersDetailAbout.about_company.button}
        </StyledTexts>
      </NavLink>
    </StyledCareersAbout>
  );
};

export default CareersAbout;
