import React from 'react'
import { StyledTransfers } from '../../../Styles/SubPages/Transfers/Transfers.styled'
import TransfersHero from './TransfersHero';

interface TransfersProps {
  smallState: 'desktop' | 'mobile';
}

const Transfers = ({smallState} : TransfersProps) => {
  return (
    <StyledTransfers>
      <TransfersHero smallState={smallState}/>
    </StyledTransfers>
  )
}

export default Transfers