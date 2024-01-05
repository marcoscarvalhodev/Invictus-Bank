import React from 'react';
import PigSVG from '../../../assets/svg/savings/pig-coin/pig.svg?react';
import { StyledPig } from '../../../Styles/SubPages/Savings/pig.styled';
import Coin from '../../../assets/svg/savings/pig-coin/coin-wrapper.svg?react';

interface PigProps {
  small: boolean;
  flexHeight: number;
  childTop: number;
}

const Pig = ({ small, flexHeight, childTop }: PigProps) => {
  const pigWrapper = React.useRef<HTMLDivElement | null>(null);
  const pigParentRef = React.useRef<HTMLElement | null>(null);
  const [pigTop, setPigTop] = React.useState(0);

  const [scrolled, setScrolled] = React.useState(false);
  const [scrollTop, setScrollTop] = React.useState(0);

  React.useEffect(() => {
    const pigDiv = pigWrapper.current as HTMLDivElement;

    setPigTop(pigDiv.getBoundingClientRect().top);

    
  }, []);

  return (
    <StyledPig $pigTop={pigTop} $small={small} $flexHeight={flexHeight} $childTop={childTop}>
      <div className='pig-section'>
        <div className='pig-wrapper' ref={pigWrapper}>
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
