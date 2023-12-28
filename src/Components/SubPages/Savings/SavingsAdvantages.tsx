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
}

const SavingsAdvantages = ({ smallState }: SavingsAdvantagesProps) => {
  return (
    <StyledSavingsAdvantages className='container'>
      <div className='savings-advantages-flex'>
        <StyledHeadings as='h2' $device={smallState} className='title-advantages'>
          {ContentAccountTypes.Savings.savings_advantages.title}
        </StyledHeadings>
        <StyledTexts $size='p1' $device={smallState} className='description-advantages'>
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

      <div className='savings-advantages-flex flex-2'>
            <img src={AdantagesImage} alt="" className='advantages-image' />
      </div>
    </StyledSavingsAdvantages>
  );
};

export default SavingsAdvantages;
