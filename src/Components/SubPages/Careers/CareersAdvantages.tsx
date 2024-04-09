import React from 'react';
import { StyledCareersAdvantages } from '../../../Styles/SubPages/Careers/CareersAdvantages.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentCareers } from '../../../Contents';
import PersonPromoted from '../../../assets/img/careers/person_promoted.jpg';
import Input from '../../Reusable/Input';
import useForm from '../../../Hooks/useForm';
import CareersSearch from '../../../assets/svg/careers/search.svg?react';
import { careersProps } from '../../../Helper/CareersTypes';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { NavLink} from 'react-router-dom';

interface CareersAdvantagesProps {
  careersState: careersProps;
  setUpdatedCareersTitle: React.Dispatch<React.SetStateAction<string>>;
  updatedCareersTitle: string;
  setUpdatedCareersDescription: React.Dispatch<React.SetStateAction<string>>;
  updatedCareersDescription: string;
  everyCareersState: boolean;
}

const CareersAdvantages = ({
  careersState,
  setUpdatedCareersTitle,
  updatedCareersTitle,
  setUpdatedCareersDescription,
  updatedCareersDescription,
  everyCareersState,
}: CareersAdvantagesProps) => {
  const name = useForm();
  const [descriptionArray, setDescriptionArray] = React.useState<string[]>([
    '',
  ]);

  React.useEffect(() => {
    if (name.value) {
      setUpdatedCareersTitle(name.value.toLowerCase());
    }

    if (name.value) {
      setUpdatedCareersDescription(name.value.toLowerCase());
    }
  }, [setUpdatedCareersTitle, setUpdatedCareersDescription, name]);

  React.useEffect(() => {
    careersState &&
      careersState.map((item) => {
        if (item) {
          if (item.title.length > 0) {
            setDescriptionArray(
              item.description.split(name.value.toLowerCase())
            );

            
          }
        }
      });
  }, [careersState, name.value]);

  return (
    <StyledCareersAdvantages className='container'>
      <div className='advantages-flex flex-1'>
        <StyledHeadings as='h5'>
          {ContentCareers.careers_hero.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' className='title-advantages'>
          {ContentCareers.careers_hero.h2_title}
        </StyledHeadings>

        <Input
          name='careers-search'
          label=''
          type='text'
          placeholder='Search for a job'
          {...name}
          
        >
          <CareersSearch className='careers-search' />
        </Input>

        <div
          className={`jobs-list-wrapper ${
            name.value && updatedCareersTitle.length > 0 && !everyCareersState
              ? 'jobs-list-wrapper-active'
              : 'jobs-list-wrapper-disabled'
          }`}
        >
          {careersState &&
            careersState.map((item, index) => {
              if (item)
                if (item.title.length > 0) {
                  return (
                    <div key={item.id} className='jobs-list'>
                      <NavLink to={`job/${item.id}`}>
                        <div >
                          <StyledHeadings as='h3' className='careers-title'>
                            {item.title.split(' ').map((item) => {
                              return (
                                ' ' + item[0].toUpperCase() + item.substring(1)
                              );
                            })}
                          </StyledHeadings>
                          <StyledTexts
                            $size='p1'
                            style={{ letterSpacing: '0.2rem' }}
                            className='careers-description'
                          >
                            {descriptionArray.map((item, index) => (
                              <React.Fragment key={index}>
                                {item}
                                {index !== descriptionArray.length - 1 && (
                                  <StyledTexts
                                    $size='p1'
                                    as='span'
                                    style={{ fontWeight: 'bold' }}
                                  >
                                    {name.value.toLowerCase()}
                                  </StyledTexts>
                                )}
                              </React.Fragment>
                            ))}
                          </StyledTexts>
                          <StyledTexts $size='p1' className='careers-location'>
                            {item.location.split(' ').map((item) => {
                              return (
                                ' ' + item[0].toUpperCase() + item.substring(1)
                              );
                            })}
                          </StyledTexts>
                        </div>
                      </NavLink>
                      
                      
                    </div>
                  );
                }

                

            })}
        </div>

        <div
          className={`no-jobs-wrapper ${
            everyCareersState && name.value ? 'no-jobs-found' : 'jobs-found'
          }`}
        >
          <StyledHeadings as='h3'>No jobs found.</StyledHeadings>
        </div>
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
