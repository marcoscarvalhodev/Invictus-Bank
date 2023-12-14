import React from 'react';
import { StyledDownloadApp } from '../../../Styles/Body/DownloadApp/DownloadApp.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { ContentDownloadApp } from '../../../Contents';

interface DownloadAppProps {
  smallState: 'mobile' | 'desktop';
}

const DownloadApp = ({ smallState }: DownloadAppProps) => {
  return (
    <StyledDownloadApp>
      <div className='download-app-item-1'>
        <StyledHeadings as='h5' $device={smallState}>{ContentDownloadApp.h5_subtitle}</StyledHeadings>
        <StyledHeadings as='h2' $device={smallState}>{ContentDownloadApp.h2_title}</StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}>{ContentDownloadApp.p_description}</StyledTexts>
      </div>
    </StyledDownloadApp>
  );
};

export default DownloadApp;
