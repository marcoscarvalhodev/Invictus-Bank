import React from 'react';
import { StyledDownloadApp } from '../../../Styles/Body/DownloadApp/DownloadApp.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';

interface DownloadAppProps {
  smallState: 'mobile' | 'desktop';
}

const DownloadApp = ({ smallState }: DownloadAppProps) => {
  return (
    <StyledDownloadApp>
      <div className='download-app-item-1'>
        <StyledHeadings as='h5' $device={smallState}>CREATE YOUR ACCOUNT</StyledHeadings>
        <StyledHeadings as='h2' $device={smallState}>Download our app.</StyledHeadings>
        <StyledTexts $size='p1' $device={smallState}>Our app is the best app in the world with tons of resources and things you can do.</StyledTexts>
      </div>
    </StyledDownloadApp>
  );
};

export default DownloadApp;
