import React from 'react';
import { StyledDepositsHero } from '../../../Styles/SubPages/Deposits/DepositsHero.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

import Safe from '../../../assets/svg/deposits/safe.svg?react';

interface DepositsHeroProps {
  smallState: 'mobile' | 'desktop';
}

const DepositsHero = ({ smallState }: DepositsHeroProps) => {
  return (
    <StyledDepositsHero className='container'>
      <div className='flex-hero'>
        <StyledHeadings as='h5' $device={smallState}>Subtitulo</StyledHeadings>
        <StyledHeadings as='h2' $device={smallState} className='title-hero'>Titulo</StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}>Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição</StyledTexts>
      </div>
      <div className='flex-hero flex-hero-2'>
        <Safe className='safe'/>
      </div>
    </StyledDepositsHero>
  );
};

export default DepositsHero;
