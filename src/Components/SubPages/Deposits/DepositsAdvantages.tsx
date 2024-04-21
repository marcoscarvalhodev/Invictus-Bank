import React from 'react';
import { StyledDepositsAdvantages } from '../../../Styles/SubPages/Deposits/DepositsAdvantages.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import DepositsHourglass from '../../../assets/img/deposits/hourglass-deposits.webp';
import { ContentDeposits } from '../../../Contents';

const DepositsAdvantages = () => {
  return (
    <StyledDepositsAdvantages className='container'>
      <div className='advantages-flex'>
        <div className='deposits-hourglass-wrapper'>
          <img
            src={DepositsHourglass}
            alt='Hourglass with coins around it to illustrate how time means money'
            className='deposits-hourglass'
          />
        </div>
      </div>
      <div className='advantages-flex'>
        <StyledHeadings as='h5'>
          {ContentDeposits.advantages.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' className='title-advantages'>
          {ContentDeposits.advantages.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1'>
          {ContentDeposits.advantages.p_description}
        </StyledTexts>
      </div>
    </StyledDepositsAdvantages>
  );
};

export default DepositsAdvantages;
