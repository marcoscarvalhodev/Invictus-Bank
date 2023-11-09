import React from 'react';
import { StyledSupremeApp } from '../../../Styles/Body/SupremeApp/SupremeApp.styled';
import { ContentSupremeApp } from '../../../Contents';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import Icons from '../../Reusable/Icons';

interface SupremeAppProps {
  smallState: 'desktop' | 'mobile';
}

const SupremeApp = ({ smallState }: SupremeAppProps) => {
  return (
    <StyledSupremeApp className='container'>
      <div className='SupremeApp-item-1'></div>
      <div className='SupremeApp-item-1'>
        {ContentSupremeApp.app_description.map(
          ({ h5_subtitle, h2_title, p_description, id }) => {
            return (
              <div key={id}>
                <StyledHeadings as='h5' $device={smallState}>
                  {h5_subtitle}
                </StyledHeadings>
                <StyledHeadings as='h2' $device={smallState}>
                  {h2_title}
                </StyledHeadings>
                <StyledTexts $device={smallState} $size='p1'>
                  {p_description}
                </StyledTexts>
              </div>
            );
          }
        )}

        <ul>
          {ContentSupremeApp.app_bullets.map(
            ({ bullet_id, bullet_title, bullet_description, bullet_icon }) => {
              return (
                <li key={bullet_id}>
                  <Icons inheritedClass='bullet-icons'>{bullet_icon}</Icons>
                  <div>
                    <StyledHeadings
                      className='bullet-title'
                      as='h5'
                      $device={smallState}
                    >
                      {bullet_title}
                    </StyledHeadings>

                    <StyledTexts as='p' $size='p4' $device={smallState} >
                      {bullet_description}
                    </StyledTexts>
                    </div>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </StyledSupremeApp>
  );
};

export default SupremeApp;
