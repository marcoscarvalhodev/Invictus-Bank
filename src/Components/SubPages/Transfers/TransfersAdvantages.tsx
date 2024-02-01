import React from 'react';
import { StyledTransfersAdvantages } from '../../../Styles/SubPages/Transfers/TransfersAdvantages.styled';

import LaptopMockup from '../../../assets/svg/transfers/laptop-mockup.png?url';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentTransfers } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

interface TransfersAdvantagesProps {
  smallState: 'mobile' | 'desktop';
}

const TransfersAdvantages = ({ smallState }: TransfersAdvantagesProps) => {
  return (
    <StyledTransfersAdvantages className='container'>
      <div className='advantages-flex'>
        <div className='laptop-mockup-wrapper'>
          <img src={LaptopMockup} alt='' className='laptop-mockup' />
        </div>
      </div>
      <div className='advantages-flex'>
        <StyledHeadings as="h5" $device={smallState}>{ContentTransfers.advantages.h5_subtitle}</StyledHeadings>
        <StyledHeadings as="h2" $device={smallState} className='title-advantages'>{ContentTransfers.advantages.h2_title}</StyledHeadings>
        <StyledTexts $size="p1" $device={smallState}>{ContentTransfers.advantages.p_descripion}
        </StyledTexts>
      </div>
    </StyledTransfersAdvantages>
  );
};

export default TransfersAdvantages;
