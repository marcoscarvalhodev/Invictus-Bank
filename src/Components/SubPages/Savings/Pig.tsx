import React from 'react';
import PigSVG from '../../../assets/svg/pig-coin/pig.svg?react';
import { StyledPig } from '../../../Styles/SubPages/Savings/pig.styled';
import Coin from '../../../assets/svg/pig-coin/coin-wrapper.svg?react';

const Pig = () => {
  const pigWrapper = React.useRef();
  const [pigTop, setPigTop] = React.useState(0);

  React.useEffect(() => {
    const pigDiv = pigWrapper.current as HTMLDivElement;
    setPigTop(pigDiv.getBoundingClientRect().top);
  }, []);

  return (
    <StyledPig $pigTop={pigTop}>
      <div className='second-section'>
        <div className='pig-wrapper' ref={pigWrapper}>
          <PigSVG className='pig' />
          <div className='hole'></div>

          <div className='container'>
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
