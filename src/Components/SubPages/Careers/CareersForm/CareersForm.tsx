import React from 'react'
import { StyledCareersForm } from '../../../../Styles/SubPages/Careers/CareersForm/CareersForm.styled';
import useForm from '../../../../Hooks/useForm';
import { StyledHeadings } from '../../../../Styles/Reusable/Headings.styled';
import { ContentCareersForm } from '../../../../Contents';
import { StyledTexts } from '../../../../Styles/Reusable/Texts.styled';

const CareersForm = () => {
  const firstName = useForm('');

  return (
    <StyledCareersForm>
      <StyledHeadings as="h2">{ContentCareersForm.h2_title}</StyledHeadings>
      <StyledTexts $size="p2">{ContentCareersForm.p_required}</StyledTexts>
    </StyledCareersForm>
  )
}

export default CareersForm