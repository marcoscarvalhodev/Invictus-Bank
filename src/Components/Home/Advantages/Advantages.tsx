import React from 'react';
import { StyledAdvantages } from '../../../Styles/Home/Advantages/Advantages.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAdvantages } from '../../../Contents';
import Icons from '../../Reusable/Icons';
import Entail from '../../../assets/svg/entail.svg?react';


const Advantages = () => {
  
  return (
    <StyledAdvantages className='container'>
      <div className='advantages'>
        <div className='auto-title'>
          <StyledHeadings
            className='advantages-subtitle'
            as='h5'
            
          >
            Supreme
          </StyledHeadings>
          <StyledHeadings
            className='advantages-title'
            as='h2'
            
          >
            Why Supreme Bank?
          </StyledHeadings>
        </div>

        {ContentAdvantages.advantages.map(({ id, icon, text }) => {
          return (
            <div className='advantages-item' key={id}>
              <Icons inheritedClass='advantages-icons'>{icon}</Icons>
              <StyledTexts
                className='advantages-icons-description'
                
                $size='p4'
                
              >
                {text}
              </StyledTexts>
            </div>
          );
        })}

        <Entail className='entail' />
      </div>
    </StyledAdvantages>
  );
};

export default Advantages;
