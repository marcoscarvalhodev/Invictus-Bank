import React from 'react';
import { StyledCareers } from '../../../Styles/SubPages/Careers/Careers.styled';
import CareersAdvantages from './CareersAdvantages';
import { ContentCareers } from '../../../Contents';
import useForm, { useFormProps } from '../../../Hooks/useForm';

export interface careerProps {
  title: string;
  id: number;
  description: string;
  location: string;
}

export type careersProps = Array<careerProps>;

const Careers = () => {
  const [careersState, setCareersState] = React.useState<careersProps>([]);
  const [updatedCareersState, setUpdatedCareersState] = React.useState('');
  const [everyCareersState, setEveryCareersState] = React.useState(false);

  React.useEffect(() => {
    const included_careers = ContentCareers.careers_data.map((item) => {
      if (item.title.includes(updatedCareersState)) {
        return item;
      } else {
        return null;
      }
    });

    setCareersState(included_careers);
  }, [updatedCareersState]);

  React.useEffect(() => {
    const everyCareer = careersState.every((item) => item === null);
    setEveryCareersState(everyCareer);
  }, [careersState]);

  return (
    <StyledCareers>
      <CareersAdvantages
        everyCareersState={everyCareersState}
        updatedCareersState={updatedCareersState}
        setUpdatedCareersState={setUpdatedCareersState}
        careersState={careersState}
        
      />
    </StyledCareers>
  );
};

export default Careers;
