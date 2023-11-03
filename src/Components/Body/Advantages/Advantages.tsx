import React from 'react';
import { StyledAdvantages } from '../../../Styles/Body/Advantages/Advantages.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAdvantages } from '../../../Contents';
import { Icons } from '../../Reusable/Icons';


const Advantages = () => {
  return (
    <StyledAdvantages>
      <div className='advantages'>
        <div className='auto-title'>
          <StyledHeadings as='h5' $device='desktop'>
            Supreme
          </StyledHeadings>
          <StyledHeadings as='h2' $device='desktop'>
            Why Supreme Bank?
          </StyledHeadings>
        </div>
       
        
      </div>
    </StyledAdvantages>
  );
};

export default Advantages;
