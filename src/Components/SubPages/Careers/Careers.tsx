import React from 'react';
import { StyledCareers } from '../../../Styles/SubPages/Careers/Careers.styled';
import CareersAdvantages from './CareersAdvantages';
import { ContentCareers } from '../../../Contents';

const Careers = () => {
  const [careerState, setCareerState] = React.useState(['']);

  React.useEffect(() => {
    const included_careers = ContentCareers.careers_data.map(({ title }) => {
      if (title.includes('front')) {
        return title;
      } else {
        return '';
      }
    });

    setCareerState(included_careers);
  }, []);

  return (
    <StyledCareers>
      <CareersAdvantages careersState={careerState} />
    </StyledCareers>
  );
};

export default Careers;
