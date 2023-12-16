import React from 'react';
import { StyledSVGPeople } from '../../../Styles/Home/People/SVGPeople.styled';
import ContainerSizes from '../../../ContainerSizes';

interface SVGPeopleProps {
  width: string;
  height: string;
  class1: string;
  class2: string;
  svg1: string;
  svg2: string;
}

const SVGPeople = ({
  width,
  height,
  class1,
  class2,
  svg1,
  svg2,
}: SVGPeopleProps) => {
  const { xsmall, small, medium, large, xlarge } = ContainerSizes();

  return (
    <StyledSVGPeople
      className='people-svg'
      
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      $small={small}
      $xsmall={xsmall}
      $width={width}
      $height={height}
    >
      <image className={class1} href={svg1} width={width} height={height} />
      <image className={class2} href={svg2} width={width} height={height} />
    </StyledSVGPeople>
  );
};

export default SVGPeople;
