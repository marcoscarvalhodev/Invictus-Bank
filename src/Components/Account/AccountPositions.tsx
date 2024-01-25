import React from 'react';

interface AccountPositionProps {
  position_1: React.JSX.Element;
  position_2: React.JSX.Element;

}

const AccountPositions = ({position_1, position_2} : AccountPositionProps) => {
  return (
    <>
      {position_1}
      {position_2}
    </>
  )
}

export default AccountPositions