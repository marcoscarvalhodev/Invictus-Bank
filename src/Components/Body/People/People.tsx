import React from 'react';
import { StyledPeople } from '../../../Styles/Body/People/People.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentPeople } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import SVGPeople from './SVGPeople';

import People1 from '../../../assets/img/elderly-holding-phone.jpg';
import People2 from '../../../assets/img/woman-looking-phone-drinking-coffe.jpg';
import People3 from '../../../assets/img/man-holding-bank-pig.jpg';
import People4 from '../../../assets/img/woman-holding-card.jpg';
import People5 from '../../../assets/img/woman-looking-phone-surprised.jpg';
import People6 from '../../../assets/img/woman-looking-laptop.jpg';
import IconCheck from '../../../assets/svg/icon-check.svg';
import { Icons } from '../../Reusable/Icons';

import ContainerSizes from '../../../ContainerSizes';

const People = () => {
  const {small, xsmall, xlarge, large, medium} = ContainerSizes()
  return (
    <StyledPeople
      $icon={Icons(IconCheck)}
      $small={small}
      $xsmall={xsmall}
      className='container container-people'
    >
      <div className='flex-item-4-people'>
        <StyledHeadings className='subtitle' as='h5' $device='desktop'>
          {ContentPeople.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings className='title' as='h2' $device='desktop'>
          {ContentPeople.h2_title}
        </StyledHeadings>
        <StyledTexts as='p' $size='p1' $device='desktop'>
          {ContentPeople.p_description}
        </StyledTexts>

        <ul className='people-list'>
          {ContentPeople.list_bulets.map(
            ({ bullet_id, bullet_title, bullet_description }) => {
              return (
                <div key={bullet_id} className='list-wrapper'>
                  <div className='check-icon'></div>
                  <li className={`people-list-item bg-icon-check`}>
                    <StyledHeadings
                      className='bullet-title'
                      as='h5'
                      $device='desktop'
                    >
                      {bullet_title}
                    </StyledHeadings>

                    <StyledTexts as='p' $size='p1' $device='mobile'>
                      {bullet_description}
                    </StyledTexts>
                  </li>
                </div>
              );
            }
          )}
        </ul>

        <StyledTexts as='a' href='' $size='p1' $device='desktop' $link={true}>
          {ContentPeople.link_advantages}
        </StyledTexts>
      </div>

      <div className='flex-item-3-people'>
        <SVGPeople
          class1='people-1'
          class2='people-2'
          width='456'
          height='660'
          svg1={People1}
          svg2={People2}
        />
      </div>
      <div className='flex-item-1-people'>
        <SVGPeople
          class1='people-3'
          class2='people-4'
          width='328'
          height='475'
          svg1={People3}
          svg2={People4}
        />
        <SVGPeople
          class1='people-5'
          class2='people-6'
          width='324'
          height='324'
          svg1={People6}
          svg2={People5}
        />
      </div>
    </StyledPeople>
  );
};

export default People;
