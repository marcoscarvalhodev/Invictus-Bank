import React from 'react';
import { StyledCareersForm } from '../../../../Styles/SubPages/Careers/CareersForm/CareersForm.styled';
import CareersFormHero from './CareersFormHero';
import CareersFormFields from './CareersFormFields';


const CareersForm = () => {
  
  return (
    <StyledCareersForm>
      <CareersFormHero />
      <CareersFormFields />
    </StyledCareersForm>
  );
};

export default CareersForm;
