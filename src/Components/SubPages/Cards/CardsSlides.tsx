import React from 'react';
import { StyledCardsSlides } from '../../../Styles/SubPages/Cards/CardsSlides.styled';
import { ContentCards } from '../../../Contents';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Icons from '../../Reusable/Icons';
import IconCheck from '../../../assets/svg/icon-check.svg?react';

const CardsSlides = () => {
  return (
    <StyledCardsSlides>
      <section className='container'>
        <div className='flex-slides'>
          <StyledHeadings as='h5'>
            {ContentCards.Cards.card_options.h5_subtitle}
          </StyledHeadings>
          <StyledHeadings as='h2' className='title-slides'>
            {ContentCards.Cards.card_options.h2_title}
          </StyledHeadings>
          <StyledTexts $size='p1' className='description-slides'>
            {ContentCards.Cards.card_options.p_description}
          </StyledTexts>
        </div>

        <ul className='slides-wrapper'>
          {ContentCards.Cards.card_options.slides.map(
            ({ id, icon, name, advantages }) => {
              return (
                <li key={id} className='slides'>
                  <StyledHeadings as='h3' className='slide-titles'>
                    {name}
                  </StyledHeadings>
                  {icon}

                  <ul>
                    {advantages.map((item, index) => (
                      <li className='bullet-wrapper-advantages' key={index}>
                        <div className='bullet-advantages bullet-1'>
                          <Icons>
                            <IconCheck />
                          </Icons>
                        </div>
                        <div className='bullet-advantages bullet-2'>
                          <StyledTexts $size='p4'>{item}</StyledTexts>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </StyledCardsSlides>
  );
};

export default CardsSlides;
