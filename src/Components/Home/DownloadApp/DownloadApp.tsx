import React from 'react';
import { StyledDownloadApp } from '../../../Styles/Home/DownloadApp/DownloadApp.styled';
import { StyledHeadings } from '../../../Styles/Reusable/Headings.styled';
import { StyledTexts } from '../../../Styles/Reusable/Texts.styled';
import { ContentDownloadApp} from '../../../Contents';
import LogoSB from '../../../assets/svg/figsb4.svg?react';


const DownloadApp = () => {
  return (
    <StyledDownloadApp className='container'>
      <div className='download-app-item'>
        <StyledHeadings as='h5'>
          {ContentDownloadApp.h5_subtitle}
        </StyledHeadings>
        <StyledHeadings as='h2' className='title'>
          {ContentDownloadApp.h2_title}
        </StyledHeadings>
        <StyledTexts $size='p1'>{ContentDownloadApp.p_description}</StyledTexts>

        <div className='download-app-buttons'>
          {ContentDownloadApp.buttons.map((x, i) => (
            <div key={i}>{x.button}</div>
          ))}
        </div>
      </div>

      <div className='download-app-item flex-item-2'>
        <LogoSB className='logo-sb' />
      </div>
    </StyledDownloadApp>
  );
};

export default DownloadApp;
