import React from 'react';
import { StyledSavingsSlides } from '../../../Styles/SubPages/Savings/SavingsSlides.styled';
import { ContentAccountTypes } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';

interface SavingsSlidesProps {
  smallState: 'mobile' | 'desktop';
}

const SavingsSlides = ({ smallState }: SavingsSlidesProps) => {
  return (
    <StyledSavingsSlides >

      <section className='container'>
      <div className='flex-savings-slides'>
        <StyledHeadings $device={smallState} as='h2' className='title-slides'>
          {ContentAccountTypes.Savings.savings_slides.title}
        </StyledHeadings>
        <StyledTexts $size='p1' $device={smallState} className='description-slides'>
          {ContentAccountTypes.Savings.savings_slides.p_description}
        </StyledTexts>
      </div>

      
        <ul className='savings-slides-wrapper'>
          {ContentAccountTypes.Savings.savings_slides.slides.map(({id, icon, name, link}) => {
            return <li key={id} className='savings-slides'>
              {icon}

              <StyledHeadings as="h4" $device={smallState} className='savings-slide-titles'>{name}</StyledHeadings>

              <StyledTexts $link={true} $device={smallState} $size='p1' className='savings-slide-links'>{link}</StyledTexts>
            </li>;
          })}
        </ul>
        </section>
    </StyledSavingsSlides>
  );
};

export default SavingsSlides;
