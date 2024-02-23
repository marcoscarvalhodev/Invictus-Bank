import React from 'react';
import PigSVG from '../../../assets/svg/savings/pig-coin/pig.svg?react';
import { StyledPig } from '../../../Styles/SubPages/Savings/pig.styled';
import Coin from '../../../assets/svg/savings/pig-coin/coin-wrapper.svg?react';



interface PigProps {
  small: boolean;
}

const Pig = ({ small }: PigProps) => {
  return (
    <StyledPig $small={small}>
      <div className='pig-section'>
        <div className='pig-wrapper'>
          {[...Array(6)].map((item) => <div className='firework'></div>)}
          <PigSVG className='pig' />
          <div className='hole'></div>

          <div className='container-pig'>
            <div className='coined'>
              <Coin className='face front' />
              <Coin className='face back' />
              {[...Array(20)].map((x, i) => (
                <div className={`side figureSide-${i}`} key={i}></div>
              ))}
            </div>
          </div>


          
        </div>
      </div>
    </StyledPig>
  );
};

export default Pig;
