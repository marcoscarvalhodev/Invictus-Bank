import React from 'react';
import { StyledCareersForm } from '../../../../Styles/SubPages/Careers/CareersForm/CareersForm.styled';
import CareersFormHero from './CareersFormHero';
import CareersFormFields from './CareersFormFields';
import Head from '../../../../Helper/Head';

interface CareersFormProps {
  setFooterState: React.Dispatch<React.SetStateAction<boolean>>;
}

const CareersForm = ({ setFooterState }: CareersFormProps) => {
  React.useEffect(() => {
    setFooterState(false);
    return () => setFooterState(true);
  });

  return (
    <StyledCareersForm>
      <Head title='Careers Form' description='Careers Form section of Supreme Bank application'/>
      <CareersFormHero />
      <CareersFormFields />
    </StyledCareersForm>
  );
};

export default CareersForm;
