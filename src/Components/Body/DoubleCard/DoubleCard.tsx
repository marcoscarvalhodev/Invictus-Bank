import React from 'react'
import { StyledDoubleCard } from '../../../Styles/Body/DoubleCard/DoubleCard.styled'
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

interface DoubleCardProps {
  smallState: 'mobile' | 'desktop';
}

const DoubleCard = ({smallState}: DoubleCardProps ) => {
  return (
    <StyledDoubleCard className='container'>
      <div className='double-card-flex-item-1'>
        <StyledHeadings as='h5' $device={smallState}>TURN SUPREME</StyledHeadings>
        <StyledHeadings as='h2' $device={smallState}>Credit and debit card.</StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}></StyledTexts>
      </div>
      <div className='double-card-flex-item-1'></div>
    </StyledDoubleCard>
  )
}

export default DoubleCard