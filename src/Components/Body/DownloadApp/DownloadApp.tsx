import React from 'react';
import { StyledDownloadApp } from '../../../Styles/Body/DownloadApp/DownloadApp.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { ContentDownloadApp, ContentDoubleCard } from '../../../Contents';
import Icons from '../../Reusable/Icons';
import LogoSB from '../../../assets/svg/figsb4.svg?react';
import ContainerSizes from '../../../ContainerSizes';

interface DownloadAppProps {
  smallState: 'mobile' | 'desktop';
}

const DownloadApp = ({ smallState }: DownloadAppProps) => {
  const {small} = ContainerSizes();

  return (
    <StyledDownloadApp className='container' $small={small} >
      <div className='download-app-item'>
        <StyledHeadings as='h5' $device={smallState}>
          {ContentDownloadApp.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' $device={smallState} className='title'>
          {ContentDownloadApp.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}>
          {ContentDownloadApp.p_description}
        </StyledTexts>

        <div className='download-app-buttons'>
          {ContentDownloadApp.buttons.map((x, i) => (
            <div key={i}>{x.button}</div>
          ))}
        </div>
      </div>

      <div className='download-app-item flex-item-2'>
        <LogoSB />
      </div>
    </StyledDownloadApp>
  );
};

export default DownloadApp;
