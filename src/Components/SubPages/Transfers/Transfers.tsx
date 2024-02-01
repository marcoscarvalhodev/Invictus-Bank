import React from 'react'
import { StyledTransfers } from '../../../Styles/SubPages/Transfers/Transfers.styled'
import TransfersHero from './TransfersHero';
import TransfersAdvantages from './TransfersAdvantages';

interface TransfersProps {
  smallState: 'desktop' | 'mobile';
}

const Transfers = ({smallState} : TransfersProps) => {
  return (
    <StyledTransfers>
      <TransfersHero smallState={smallState}/>
      <TransfersAdvantages smallState={smallState}/>
    </StyledTransfers>
  )
}

export default Transfers