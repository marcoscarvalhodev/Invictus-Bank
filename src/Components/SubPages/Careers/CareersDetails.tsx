import React from 'react';
import { StyledCareersDetails } from '../../../Styles/SubPages/Careers/CareersDetails.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import UserContext from '../../../UseContext';
import { useLocation } from 'react-router-dom';
import NoMatch from '../../../NoMatch';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import CareersAbout from './CareersAbout';

import { careerProps } from '../../../Helper/CareersTypes';

const CareersDetails = () => {
  const [itemState, setItemState] = React.useState<careerProps | null>(null);
  const item = React.useContext(UserContext);
  const location = useLocation();
  const [locationState, setLocationState] = React.useState(false);

  React.useEffect(() => {
    if (item) {
      setItemState(item);
      setLocationState(
        location.pathname === `/careers/job/${item.id}` ? true : false
      );
    }
  }, [item, location, locationState]);

  if (itemState && locationState)
    return (
      <StyledCareersDetails className='container'>
        <div className='careers-grid careers-grid-1'>
          <StyledHeadings as='h2' className='main-title'>
            {itemState.title[0].toUpperCase() + itemState.title.substring(1)}
          </StyledHeadings>

          {itemState.job_details.map((item, index) => {
            return (
              <div key={index} className='job-details'>
                <div className='company-details'>
                  <StyledHeadings as='h3' className='company-details-title'>
                    {item.company.title}
                  </StyledHeadings>
                  <StyledTexts
                    $size='p4'
                    className='company-details-description-1'
                  >
                    {item.company.description_1}
                  </StyledTexts>
                  <StyledTexts
                    $size='p4'
                    className='company-details-description-2'
                  >
                    {item.company.description_2}
                  </StyledTexts>
                </div>

                <div className='description-details'>
                  <StyledHeadings as='h3'>
                    {item.job_description.title}
                  </StyledHeadings>
                  {item.job_description.description.map((item, index) => {
                    return (
                      <StyledTexts
                        key={index}
                        $size='p4'
                        className='bolded-text'
                      >
                        {item.description_segment}
                      </StyledTexts>
                    );
                  })}
                </div>

                <div className='bullets-details'>
                  <StyledHeadings as='h6'>
                    {item.job_bullets.bullet_your_duty.title}
                  </StyledHeadings>
                  <ul className='bullets-details-list'>
                    {item.job_bullets.bullet_your_duty.bullets.map(
                      (item, index) => {
                        return (
                          <li key={index} className='bullets-dots'>
                            <StyledTexts $size='p4'>{item.bullet}</StyledTexts>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className='careers-grid careers-grid-2'>
          <CareersAbout />
        </div>
      </StyledCareersDetails>
    );
  else return <NoMatch />;
};

export default CareersDetails;
