import React from 'react';
import { StyledCareersAdvantages } from '../../../Styles/SubPages/Careers/CareersAdvantages.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentCareers } from '../../../Contents';
import PersonPromoted from '../../../assets/img/careers/person_promoted.jpg';
import Input from '../../Reusable/Input';
import useForm, { useFormProps } from '../../../Hooks/useForm';
import CareersSearch from '../../../assets/svg/careers/search.svg?react';
import { careersProps } from './Careers';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

interface CareersAdvantagesProps {
  careersState: careersProps;
  setUpdatedCareersState: React.Dispatch<React.SetStateAction<string>>;
  updatedCareersState: string;
  everyCareersState: boolean;
}

const CareersAdvantages = ({
  careersState,
  setUpdatedCareersState,
  updatedCareersState,
  everyCareersState,
}: CareersAdvantagesProps) => {
  const name = useForm();
  const [descriptionArray, setDescriptionArray] = React.useState<string[]>([''])
  

  React.useEffect(() => {
    if (name.value)
      setUpdatedCareersState(
        name.value[0].toUpperCase() + name.value.slice(1).toLowerCase()
      );
  }, [setUpdatedCareersState, name]);


  React.useEffect(() => {
    careersState && careersState.map((item) => {
      if (item) {
        if(item.title.length > 0) {
          setDescriptionArray(item.description.split(name.value.toLowerCase()))
        }
      }
    })
  }, [careersState, name.value])


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
            name.value && updatedCareersState.length > 0 && !everyCareersState
              ? 'jobs-list-wrapper-active'
              : 'jobs-list-wrapper-disabled'
          }`}
        >
          {careersState &&
            careersState.map((item) => {
              if (item)
                if (item.title.length > 0) {
                  return (
                    <div key={item.id} className='jobs-list'>
                      <StyledHeadings as='h3'>{item.title}</StyledHeadings>
                      <StyledTexts $size='p1'>
                      {descriptionArray.map((item, index) => (
                            <React.Fragment key={index}>
                              {item}
                              {index !== descriptionArray.length - 1 && (
                                <StyledTexts $size='p1' as="a" style={{ fontWeight: 'bold' }}>
                                  {name.value.toLowerCase()}
                                </StyledTexts>
                              )}
                            </React.Fragment>
                          ))}
                      </StyledTexts>
                      <StyledTexts $size='p1'>{item.location}</StyledTexts>
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
