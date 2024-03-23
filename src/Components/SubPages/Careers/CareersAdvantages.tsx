import React from 'react';
import { StyledCareersAdvantages } from '../../../Styles/SubPages/Careers/CareersAdvantages.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentCareers } from '../../../Contents';
import PersonPromoted from '../../../assets/img/careers/person_promoted.jpg';

interface CareersAdvantagesProps {
  careersState: string[];
}

const CareersAdvantages = ({ careersState }: CareersAdvantagesProps) => {
  return (
    <StyledCareersAdvantages className='container'>
      <div className='advantages-flex'>
        <StyledHeadings as='h5'>
          {ContentCareers.careers_hero.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' className='title-advantages'>
          {ContentCareers.careers_hero.h2_title}
        </StyledHeadings>

        {careersState.filter((item) => item.length > 0)}
      </div>

      <div className='advantages-flex flex-2'>
        <img
          className='advantages-image'
          src={PersonPromoted}
          alt='A person happy for being promoted in their job'
        />
      </div>
    </StyledCareersAdvantages>
  );
};

export default CareersAdvantages;
