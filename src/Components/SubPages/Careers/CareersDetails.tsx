import React from 'react';
import { StyledCareersDetails } from '../../../Styles/SubPages/Careers/CareersDetails.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import {UserContextCareers } from '../../../UserContext';
import { useLocation } from 'react-router-dom';
import NoMatch from '../../../Helper/NoMatch';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import CareersAbout from './CareersAbout';
import { careerProps } from '../../../Helper/CareersTypes';
import CareersTitleApply from './CareersTitleApply';

const CareersDetails = () => {
  const [itemState, setItemState] = React.useState<careerProps | null>(null);
  const item = React.useContext(UserContextCareers);

  React.useEffect(() => {
    if (item) {
      setItemState(item);
    }
  }, [item]);

  if (itemState)
    return (
      <StyledCareersDetails className='container'>
        <div className='careers-grid careers-grid-1'>
          <CareersTitleApply itemState={itemState} />

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
                    {item.job_description.job_bullets.bullet_your_duty.title}
                  </StyledHeadings>
                  <ul className='bullets-details-list'>
                    {item.job_description.job_bullets.bullet_your_duty.bullets.map(
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

                <div className='bullets-details'>
                  <StyledHeadings as='h6'>
                    {item.job_description.job_bullets.bullet_we_offer.title}
                  </StyledHeadings>
                  <ul className='bullets-details-list'>
                    {item.job_description.job_bullets.bullet_we_offer.bullets.map(
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

                <div className='bullets-details'>
                  <StyledHeadings
                    as='h3'
                    className='qualifications-details-title'
                  >
                    {item.job_qualifications.title}
                  </StyledHeadings>
                  <ul className='bullets-details-list'>
                    {item.job_qualifications.bullet_qualifications.bullets.map(
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
