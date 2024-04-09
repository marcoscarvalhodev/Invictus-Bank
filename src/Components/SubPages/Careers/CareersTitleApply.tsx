import React from 'react';
import { StyledCareersTitleApply } from '../../../Styles/SubPages/Careers/CareersTitleApply.styled';
import { careerProps } from '../../../Helper/CareersTypes';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Button from '../../Reusable/Button';
import { NavLink } from 'react-router-dom';

interface CareersTitleApplyProps {
  itemState: careerProps;
}

const CareersTitleApply = ({ itemState }: CareersTitleApplyProps) => {
  return (
    <StyledCareersTitleApply>
      <StyledHeadings as='h2' className='main-title'>
        {itemState.title[0].toUpperCase() + itemState.title.substring(1)}
      </StyledHeadings>

      <div className='title-description'>
        <StyledTexts $size='p4'>{itemState.salary}</StyledTexts>
        <StyledTexts $size='p4'>&nbsp;{'-'}&nbsp;</StyledTexts>
        <StyledTexts $size='p4'>{itemState.location}</StyledTexts>
      </div>

      <NavLink to='/' className="title-button">
        <Button>Apply</Button>
      </NavLink>
    </StyledCareersTitleApply>
  );
};

export default CareersTitleApply;
