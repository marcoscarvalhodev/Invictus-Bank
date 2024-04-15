import React from 'react';
import { StyledCareersFormHero } from '../../../../Styles/SubPages/Careers/CareersForm/CareersFormHero.styled';

import { StyledHeadings } from '../../../../Styles/Reusable/Headings.styled';
import { ContentCareersForm } from '../../../../Contents';
import { StyledTexts } from '../../../../Styles/Reusable/Texts.styled';
import { UserContextCareers } from '../../../../UserContext';

const CareersFormHero = () => {
  const item = React.useContext(UserContextCareers);

  return (
    <StyledCareersFormHero>
      <div className='careers-form-heading'>
        <div className='careers-form-heading-1'>
          <StyledHeadings as='h2'>Supreme applications</StyledHeadings>
          <StyledTexts $size='p1'>
            Land your dream job at Supreme Bank and be part of our team. Apply
            yourself filling the fields below:
          </StyledTexts>
        </div>

        {item && (
          <div className='careers-form-heading-2'>
            <div className='careers-form-heading-item-1'>
              <StyledHeadings as='h4'>{item.title}</StyledHeadings>
            </div>

            <div className='careers-form-heading-item-2'>
              <StyledTexts $size='p2'>{item.salary}</StyledTexts>
              <StyledTexts $size='p2'>&nbsp;{'-'}&nbsp;</StyledTexts>
              <StyledTexts $size='p2'>{item.location}</StyledTexts>
            </div>
          </div>
        )}
      </div>

      <div className='careers-form-title'>
        <div className='careers-form-title-1'>
          <StyledHeadings as='h4'>{ContentCareersForm.h2_title}</StyledHeadings>
          <StyledTexts $size='p2'>{ContentCareersForm.p_required}</StyledTexts>
        </div>
      </div>
    </StyledCareersFormHero>
  );
};

export default CareersFormHero;
