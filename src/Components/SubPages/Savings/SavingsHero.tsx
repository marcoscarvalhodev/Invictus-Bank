import React from 'react';

import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { ContentAccountTypes } from '../../../Contents';
import Button from '../../Reusable/Button';
import Pig from './Pig';
import { StyledSavingsHero } from '../../../Styles/SubPages/Savings/SavingsHero.styled';

interface SavingsHeroProps {
  smallState: 'mobile' | 'desktop';
}

const SavingsHero = ({smallState}: SavingsHeroProps) => {
  return (
    <StyledSavingsHero className='container'>
      <div className='flex-savings-hero'>
        <StyledHeadings $device={smallState} as='h5'>
          {ContentAccountTypes.Savings.h5_subtitle}
        </StyledHeadings>

        <StyledHeadings $device={smallState} as='h2' className='title-hero'>
          {ContentAccountTypes.Savings.h2_title}
        </StyledHeadings>

        <StyledTexts $size='p1' $device={smallState}>
          {ContentAccountTypes.Savings.p_description}
        </StyledTexts>

        <div className='buttons-flex-hero'>
          <Button>{ContentAccountTypes.Savings.link_button_1}</Button>
          <Button light={true}>
            {ContentAccountTypes.Savings.link_button_2}
          </Button>
        </div>
      </div>
      <div className='flex-savings-hero'>
        <Pig />
      </div>
    </StyledSavingsHero>
  );
};

export default SavingsHero;
