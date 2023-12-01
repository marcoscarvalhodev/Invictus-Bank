import React from 'react';
import { StyledDoubleCard } from '../../../Styles/Body/DoubleCard/DoubleCard.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { ContentDoubleCard } from '../../../Contents';
import DoubleCards from '../../../assets/svg/figsb3.svg?react';
import Icons from '../../Reusable/Icons';
import ContainerSizes from '../../../ContainerSizes';
interface DoubleCardProps {
  smallState: 'mobile' | 'desktop';
}

const DoubleCard = ({ smallState }: DoubleCardProps) => {

  const {small, xsmall} = ContainerSizes();

  return (
    <StyledDoubleCard className='container' $small={small} $xsmall={xsmall}>
      <div className='double-card-flex-item-1'>
        <StyledHeadings as='h5' $device={smallState}>
          {ContentDoubleCard.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' $device={smallState} className='title'>
          {ContentDoubleCard.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}>
          {ContentDoubleCard.p_description}
        </StyledTexts>

        <ul className='list'>
          {ContentDoubleCard.icons_bullets.map(
            ({ bullet_id, bullet_title, bullet_description, bullet_icon }) => {
              return (
                <li key={bullet_id} className='list-wrapper'>
                  <Icons inheritedClass='bullet-icons'>{bullet_icon}</Icons>
                  <div className='list-item'>
                    <StyledHeadings $device={smallState} as='h5' className='bullet-title'>
                      {bullet_title}
                    </StyledHeadings>
                    <StyledTexts $device={smallState} $size='p4'>{bullet_description}</StyledTexts>
                  </div>
                </li>
              );
            }
          )}
        </ul>

        <StyledTexts as='a' href='' $size='p1' $device={smallState} $link={true} className='link'>
          {ContentDoubleCard.link_double_card}
        </StyledTexts>
      </div>
      <div className='double-card-flex-item-1 double-cards-wrapper'><DoubleCards className='double-cards' /></div>
    </StyledDoubleCard>
  );
};

export default DoubleCard;
