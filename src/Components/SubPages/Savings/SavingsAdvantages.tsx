import React from 'react';
import { StyledSavingsAdvantages } from '../../../Styles/SubPages/Savings/SavingsAdvantages.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAccountTypes } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Icons from '../../Reusable/Icons';
import IconCheck from '../../../assets/svg/icon-check.svg?react';
import AdantagesImage from '../../../assets/img/advantages/man-looking-bank.jpg';

interface SavingsAdvantagesProps {
  smallState: 'mobile' | 'desktop';
  small: boolean;
}

const SavingsAdvantages = ({ smallState, small }: SavingsAdvantagesProps) => {
  return (
    <StyledSavingsAdvantages className='container' $small={small}>
      <div className='savings-advantages-flex'>

        <StyledHeadings as="h5" $device={smallState}>
        {ContentAccountTypes.Savings.savings_advantages.h5_subtitle}
        </StyledHeadings>
        
        <StyledHeadings
          as='h2'
          $device={smallState}
          className='title-advantages'
        >
          {ContentAccountTypes.Savings.savings_advantages.h2_title}
        </StyledHeadings>
        <StyledTexts
          $size='p1'
          $device={smallState}
          className='description-advantages'
        >
          {ContentAccountTypes.Savings.savings_advantages.p_description}
        </StyledTexts>

        <ul>
          {ContentAccountTypes.Savings.savings_advantages.bullets.map(
            ({ id, bullet_description }) => {
              return (
                <li key={id} className='bullet-wrapper-advantages'>
                  <div className='bullet-advantages bullet-1'>
                    <Icons>
                      <IconCheck />
                    </Icons>
                  </div>
                  <div className='bullet-advantages bullet-2'>
                    <StyledTexts $size='p4' $device={smallState}>
                      {bullet_description}
                    </StyledTexts>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </div>

      <div className='advantages-flex flex-2'>
        <img src={AdantagesImage} alt='' className='advantages-image' />
      </div>
    </StyledSavingsAdvantages>
  );
};

export default SavingsAdvantages;
