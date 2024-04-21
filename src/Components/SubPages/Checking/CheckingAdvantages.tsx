import React from 'react';
import { StyledCheckingAdvantages } from '../../../Styles/SubPages/Checking/CheckingAdvantages.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAccountTypes } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Icons from '../../Reusable/Icons';
import IconCheck from '../../../assets/svg/icon-check.svg?react';
import HoldingCard from '../../../assets/img/checking/man-holding-card-happy.webp';

const CheckingAdvantages = () => {
  return (
    <StyledCheckingAdvantages className='container'>
      <div className='advantages-flex'>
        <StyledHeadings as='h5'>
          {ContentAccountTypes.Checking.checking_advantages.h5_subtitle}
        </StyledHeadings>

        <StyledHeadings as='h2' className='title-advantages'>
          {ContentAccountTypes.Checking.checking_advantages.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1' className='description-advantages'>
          {ContentAccountTypes.Checking.checking_advantages.p_description}
        </StyledTexts>

        <ul>
          {ContentAccountTypes.Checking.checking_advantages.bullets.map(
            ({ id, bullet_description }) => {
              return (
                <li key={id} className='bullet-wrapper-advantages'>
                  <div className='bullet-advantages bullet-1'>
                    <Icons>
                      <IconCheck />
                    </Icons>
                  </div>
                  <div className='bullet-advantages bullet-2'>
                    <StyledTexts $size='p4'>{bullet_description}</StyledTexts>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>

      <div className='advantages-flex flex-2'>
        <img src={HoldingCard} alt='' className='advantages-image' />
      </div>
    </StyledCheckingAdvantages>
  );
};

export default CheckingAdvantages;
