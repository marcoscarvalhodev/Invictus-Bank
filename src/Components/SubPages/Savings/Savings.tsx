import React from 'react';
import { StyledSavings } from '../../../Styles/SubPages/Savings/Savings.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAccountTypes } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Pig from './Pig';
import HeroBackground from '../../Home/Hero/HeroBackground.tsx';
import Button from '../../Reusable/Button.tsx';

interface SavingsProps {
  smallState: 'mobile' | 'desktop';
}

const Savings = ({ smallState }: SavingsProps) => {
  return (
    <StyledSavings className='container'>
      <HeroBackground />
      <div className='flex-savings'>
        <StyledHeadings $device={smallState} as='h5'>
          {ContentAccountTypes.Savings.h5_subtitle}
        </StyledHeadings>

        <StyledHeadings $device={smallState} as='h2' className='title'>
          {ContentAccountTypes.Savings.h2_title}
        </StyledHeadings>

        <StyledTexts $size='p1' $device={smallState}>
          {ContentAccountTypes.Savings.p_description}
        </StyledTexts>

        <div className='buttons-flex'>
        <Button>{ContentAccountTypes.Savings.link_button_1}</Button>
        <Button light={true}>{ContentAccountTypes.Savings.link_button_2}</Button>
        </div>
        
      </div>
      <div className='flex-savings'>
        <Pig />
      </div>
    </StyledSavings>
  );
};

export default Savings;
