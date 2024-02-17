import React from 'react';
import { StyledDepositsAdvantages } from '../../../Styles/SubPages/Deposits/DepositsAdvantages.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import DepositsHourglass from '../../../assets/img/deposits/hourglass-deposits.jpg';
import { ContentDeposits } from '../../../Contents';

interface DepositsAdvantagesProps {
  smallState: 'mobile' | 'desktop';
}

const DepositsAdvantages = ({ smallState }: DepositsAdvantagesProps) => {
  return (
    <StyledDepositsAdvantages className='container'>
      <div className='advantages-flex'>
        <div className='deposits-hourglass-wrapper'>
          <img src={DepositsHourglass} alt='' className='deposits-hourglass' />
        </div>
      </div>
      <div className='advantages-flex'>
        <StyledHeadings as='h5' $device={smallState}>
          {ContentDeposits.advantages.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings
          as='h2'
          $device={smallState}
          className='title-advantages'
        >
          {ContentDeposits.advantages.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}>
          {ContentDeposits.advantages.p_description}
        </StyledTexts>
      </div>
    </StyledDepositsAdvantages>
  );
};

export default DepositsAdvantages;
