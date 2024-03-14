import React from 'react';
import { StyledChecking } from '../../../Styles/SubPages/Checking/Checking.styled';
import CheckingHero from './CheckingHero';
import CheckingSlides from './CheckingSlides';
import ContainerSizes from '../../../ContainerSizes';
import CheckingAdvantages from './CheckingAdvantages';

interface CheckingProps {
  smallState: 'mobile' | 'desktop';
  xsmall: boolean;
  small: boolean;
  medium: boolean;
}

const Checking = ({ smallState, small, xsmall, medium }: CheckingProps) => {
  

  return (
    <StyledChecking>
      <CheckingHero smallState={smallState} small={small} xsmall={xsmall}/>
      <CheckingSlides
        smallState={smallState}
        small={small}
        medium={medium}
        xsmall={xsmall}
      />
      <CheckingAdvantages small={small} smallState={smallState} />
    </StyledChecking>
  );
};

export default Checking;
