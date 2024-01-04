import React from 'react'
import { StyledCheckingHero } from '../../../Styles/SubPages/Checking/CheckingHero.styled';
import { ContentAccountTypes } from '../../../Contents';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Button from '../../Reusable/Button';
import Bank from './Bank';

interface CheckingHeroProps {
  smallState: "mobile" | "desktop";
  small: boolean;
}

const CheckingHero = ({smallState, small}: CheckingHeroProps) => {
  return (
    <StyledCheckingHero className='container' $small={small}>
      <div className='flex-hero'>
        <StyledHeadings $device={smallState} as='h5'>
          {ContentAccountTypes.Checking.h5_subtitle}
        </StyledHeadings>

        <StyledHeadings $device={smallState} as='h2' className='title-hero'>
          {ContentAccountTypes.Checking.h2_title}
        </StyledHeadings>

        <StyledTexts $size='p1' $device={smallState}>
          {ContentAccountTypes.Checking.p_description}
        </StyledTexts>

        <div className='buttons-flex-hero'>
          <Button>{ContentAccountTypes.Savings.link_button_1}</Button>
          <Button light={true}>
            {ContentAccountTypes.Savings.link_button_2}
          </Button>
        </div>
      </div>
      <div className='flex-hero flex-hero-2'>
        <Bank small={small}/>
      </div>
    </StyledCheckingHero>
  )
}

export default CheckingHero