import React from 'react';
import { StyledDoubleCard } from '../../../Styles/Home/DoubleCard/DoubleCard.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { ContentDoubleCard } from '../../../Contents';
import DoubleCards from '../../../assets/svg/figsb3.svg?react';
import Icons from '../../Reusable/Icons';
import { NavLink } from 'react-router-dom';


const DoubleCard = () => {
  return (
    <StyledDoubleCard className='container'>
      <div className='double-card-flex-item-1'>
        <StyledHeadings as='h5'>{ContentDoubleCard.h5_subtitle}</StyledHeadings>
        <StyledHeadings as='h2' className='title'>
          {ContentDoubleCard.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1'>{ContentDoubleCard.p_description}</StyledTexts>

        <ul className='list'>
          {ContentDoubleCard.icons_bullets.map(
            ({ bullet_id, bullet_title, bullet_description, bullet_icon }) => {
              return (
                <li key={bullet_id} className='list-wrapper'>
                  <Icons inheritedClass='bullet-icons'>{bullet_icon}</Icons>
                  <div className='list-item'>
                    <StyledHeadings as='h5' className='bullet-title'>
                      {bullet_title}
                    </StyledHeadings>
                    <StyledTexts $size='p4'>{bullet_description}</StyledTexts>
                  </div>
                </li>
              );
            }
          )}
        </ul>

        <NavLink to='/cards'>
          <StyledTexts
            as='p'
            $size='p1'
            $link={true}
            className='link'
            $arrow={true}
          >
            {ContentDoubleCard.link_double_card}
          </StyledTexts>
        </NavLink>
      </div>
      <div className='double-card-flex-item-1 double-cards-wrapper'>
        <DoubleCards className='double-cards' />
      </div>
    </StyledDoubleCard>
  );
};

export default DoubleCard;
