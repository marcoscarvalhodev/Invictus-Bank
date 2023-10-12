import React from 'react';

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
  return (
    <svg
      className='people-svg'
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width={width} height={height} fill='transparent' />
      <rect width={width} height={height} rx='63' fill='transparent' />
      <image className={class1} href={svg1} width={width} height={height} />
      <image className={class2} href={svg2} width={width} height={height} />
    </svg>
  );
};

export default SVGPeople;
