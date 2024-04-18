import React from 'react';
import { StyledAboutPhotos } from '../../../Styles/SubPages/About/AboutPhotos.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { ContentAbout } from '../../../Contents';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
const AboutPhotos = () => {
  const [arrowState, setArrowState] = React.useState(1);

  const handleClickArrow: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const numberId = Number(event.currentTarget.id);

    setArrowState(Number(numberId));

    if (numberId === arrowState) {
      setArrowState(0);
    }
  };

  React.useEffect(() => {
    console.log(arrowState);
  }, [arrowState]);

  return (
    <StyledAboutPhotos className='container' $arrowState={arrowState}>
      <StyledHeadings as='h2' className='title'>
        {ContentAbout.slides_photos.h3_title}
      </StyledHeadings>
      <ul className='photos-wrapper'>
        {ContentAbout.slides_photos.photos.map(({ id, name, photo, role, description }) => {
          return (
            <li key={id} className='photos-each-wrapper'>
              
              <div className='photos-role-wrapper'>
                <img src={photo} alt='' className='leader-photos' />
                <StyledHeadings as='h6' $fontSize={20}>
                  {name}
                </StyledHeadings>
                <StyledHeadings as='h5' $fontSize={14}>
                  {role}
                </StyledHeadings>
              </div>
              <div
                className={`arrow-wrapper ${
                  id === arrowState ? `arrow-wrapper-${arrowState}` : ''
                } `}
                id={id.toString()}
                onClick={handleClickArrow}
              >
                <div className='arrow'></div>
                {id === arrowState ? <StyledTexts $size='p2' className='show-less'>Show less</StyledTexts> : <StyledTexts $size='p2' className='show-more'>Show more</StyledTexts>}
              </div>

              <div
              key={id}
              className={`photos-description-mobile ${
                id === arrowState ? `photos-description-mobile-${arrowState}` : ''
              }`}
            >
              <StyledTexts $size='p2'>{description}</StyledTexts>
            </div>
            </li>
          );
        })}
      </ul>

      <div className='photos-description-wrapper'>
        {ContentAbout.slides_photos.photos.map(({ id, description }) => {
          return (
            <div
              key={id}
              className={`photos-description ${
                id === arrowState ? `photos-description-${arrowState}` : ''
              }`}
            >
              <StyledTexts $size='p1'>{description}</StyledTexts>
            </div>
          );
        })}
        </div>
      
    </StyledAboutPhotos>
  );
};

export default AboutPhotos;
