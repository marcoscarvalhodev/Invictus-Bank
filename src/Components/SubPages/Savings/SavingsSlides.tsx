import React from 'react';
import { StyledSavingsSlides } from '../../../Styles/SubPages/Savings/SavingsSlides.styled';
import { ContentAccountTypes } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';

interface SavingsSlidesProps {
  smallState: 'mobile' | 'desktop';
  small: boolean;
}

const SavingsSlides = ({ smallState, small }: SavingsSlidesProps) => {
  return (
    <StyledSavingsSlides $small={small}>

      <section className='container'>
      <div className='flex-slides'>
      <StyledHeadings as='h5' $device={smallState}>
          {ContentAccountTypes.Savings.savings_slides.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings $device={smallState} as='h2' className='title-slides'>
          {ContentAccountTypes.Savings.savings_slides.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1' $device={smallState} className='description-slides'>
          {ContentAccountTypes.Savings.savings_slides.p_description}
        </StyledTexts>
      </div>

      
        <ul className='slides-wrapper'>
          {ContentAccountTypes.Savings.savings_slides.slides.map(({id, icon, name, link}) => {
            return <li key={id} className='slides'>
              {icon}

              <StyledHeadings as="h4" $device={smallState} className='slide-titles'>{name}</StyledHeadings>

              <StyledTexts $link={true} $device={smallState} $size='p1' className='slide-links'>{link}</StyledTexts>
            </li>;
          })}
        </ul>
        </section>
    </StyledSavingsSlides>
  );
};

export default SavingsSlides;
