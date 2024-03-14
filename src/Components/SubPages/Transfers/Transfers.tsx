import React from 'react'
import { StyledTransfers } from '../../../Styles/SubPages/Transfers/Transfers.styled'
import TransfersHero from './TransfersHero';
import TransfersAdvantages from './TransfersAdvantages';
import TransfersBulletAdvantages from './TransfersBulletAdvantages';
import ContainerSizes from '../../../ContainerSizes';

interface TransfersProps {
  smallState: 'desktop' | 'mobile';
  small: boolean;
  xsmall: boolean;
}

const Transfers = ({smallState, small, xsmall} : TransfersProps) => {
  

  return (
    <StyledTransfers>
      <TransfersHero smallState={smallState} small={small}/>
      <TransfersAdvantages smallState={smallState} small={small} xsmall={xsmall}/>
      <TransfersBulletAdvantages smallState={smallState}/>
    </StyledTransfers>
  )
}

export default Transfers