import React from 'react';
import { StyledCheckingSlides } from '../../../Styles/SubPages/Checking/CheckingSlides.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAccountTypes } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';


const CheckingSlides = () => {
  return (
    <StyledCheckingSlides>
      <section className='container'>
        <div className='flex-slides'>
          <StyledHeadings as='h5'>
            {ContentAccountTypes.Checking.checking_slides.h5_subtitle}
          </StyledHeadings>
          <StyledHeadings as='h2' className='title-slides'>
            {ContentAccountTypes.Checking.checking_slides.h2_title}
          </StyledHeadings>
          <StyledTexts $size='p1' className='description-slides'>
            {ContentAccountTypes.Checking.checking_slides.p_description}
          </StyledTexts>
        </div>

        <ul className='slides-wrapper'>
          {ContentAccountTypes.Checking.checking_slides.slides.map(
            ({ id, icon, name, link }) => {
              return (
                <li key={id} className='slides'>
                  {icon}

                  <StyledHeadings as='h4' className='slide-titles'>
                    {name}
                  </StyledHeadings>

                  <StyledTexts
                    $arrow={true}
                    $link={true}
                    $size='p1'
                    className='slide-links'
                  >
                    {link}
                  </StyledTexts>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </StyledCheckingSlides>
  );
};

export default CheckingSlides;
