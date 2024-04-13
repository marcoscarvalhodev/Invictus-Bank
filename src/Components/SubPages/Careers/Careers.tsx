import React from 'react';
import { StyledCareers } from '../../../Styles/SubPages/Careers/Careers.styled';
import CareersAdvantages from './CareersAdvantages';
import { ContentCareers } from '../../../Contents';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { UserContextCareers } from '../../../UserContext';
import { careersProps } from '../../../Helper/CareersTypes';

const Careers = () => {
  const [careersState, setCareersState] = React.useState<careersProps>([]);
  const [updatedCareersTitle, setUpdatedCareersTitle] = React.useState('');
  const [updatedCareersDescription, setUpdatedCareersDescription] =
    React.useState('');
  const [everyCareersState, setEveryCareersState] = React.useState(false);
  const { idParams } = useParams();
  const [navigateState, setNavigateState] = React.useState<boolean>(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    const included_careers = ContentCareers.careers_data.map((item) => {
      if (
        item.title.includes(updatedCareersTitle) ||
        item.description.includes(updatedCareersDescription) ||
        item.location.includes(updatedCareersTitle)
      ) {
        return item;
      } else {
        return null;
      }
    });

    setCareersState(included_careers);
  }, [updatedCareersTitle, updatedCareersDescription]); //get value from jobs based on search

  React.useEffect(() => {
    const returnedMaps = ContentCareers.careers_data.map((item) => {
      if (item) {
        return item.id;
      }
    });

    const smallerThan = (el: number) => el >= Number(idParams);

    setNavigateState(returnedMaps.some(smallerThan));
  }, [idParams, careersState]); //for retrieving information whether does the id exist or no

  React.useEffect(() => {
    if (idParams) {
      console.log(navigateState);

      /*navigateState === false ? navigate('/careers') : '';*/
    }
  }, [navigateState, idParams, navigate, careersState]); //navigate to careers if id doesn't exist

  React.useEffect(() => {
    const everyCareer = careersState.every((item) => item === null);
    setEveryCareersState(everyCareer);
  }, [careersState]); //function for no matching jobs

  return (
    <StyledCareers>
      <CareersAdvantages
        everyCareersState={everyCareersState}
        updatedCareersTitle={updatedCareersTitle}
        setUpdatedCareersTitle={setUpdatedCareersTitle}
        updatedCareersDescription={updatedCareersDescription}
        setUpdatedCareersDescription={setUpdatedCareersDescription}
        careersState={careersState}
      />

      {ContentCareers.careers_data.map((item) => {
        if (item)
          if (item.id === Number(idParams)) {
            return (
              <UserContextCareers.Provider
                key={item.id}
                value={item.id === Number(idParams) ? item : null}
              >
                <Outlet />
              </UserContextCareers.Provider>
            );
          }
      })}
    </StyledCareers>
  );
};

export default Careers;
