import React from 'react';
import { StyledChecking } from '../../../Styles/SubPages/Checking/Checking.styled';
import CheckingHero from './CheckingHero';
import CheckingSlides from './CheckingSlides';
import ContainerSizes from '../../../ContainerSizes';
import CheckingAdvantages from './CheckingAdvantages';

interface CheckingProps {
  smallState: 'mobile' | 'desktop';
}

const Checking = ({ smallState }: CheckingProps) => {
  const { small, medium, xsmall } = ContainerSizes();

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
