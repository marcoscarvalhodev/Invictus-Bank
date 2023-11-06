import React from 'react';
import { StyledAdvantages } from '../../../Styles/Body/Advantages/Advantages.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAdvantages } from '../../../Contents';
import Icons from '../../Reusable/Icons';
import ContainerSizes from '../../../ContainerSizes';
import Entail from '../../../assets/svg/entail.svg?react'


const Advantages = () => {
  const {xsmall, small, medium, large, xlarge} = ContainerSizes();
  return (
    <StyledAdvantages $xsmall={xsmall} $small={small} className='container'>
      <div className='advantages'>
        <div className='auto-title'>
          <StyledHeadings className='advantages-subtitle' as='h5' $device='mobile'>
            Supreme
          </StyledHeadings>
          <StyledHeadings className='advantages-title' as='h2' $device='mobile'>
            Why Supreme Bank?
          </StyledHeadings>
        </div>
       
       {ContentAdvantages.advantages.map(({id, icon, text }) => {
        return <div className='advantages-item' key={id}>
          <Icons inheritedClass='advantages-icons' >{icon}</Icons>
          <StyledTexts className="advantages-icons-description" $device="desktop" $size="p2">{text}</StyledTexts>
        </div>
       })}
        
        <Entail className='entail'/>
      </div>
    </StyledAdvantages>
  );
};

export default Advantages;
