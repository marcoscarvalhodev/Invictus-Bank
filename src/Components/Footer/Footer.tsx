import React from 'react';
import { StyledFooter } from '../../Styles/Footer/Footer.styled';
import { ContentFooter } from '../../Contents';
import FooterItems from './FooterItems';
import LogoWhite from '../../assets/svg/logosb-white.svg?react';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';

interface FooterProps {
  setFooterHeight: React.Dispatch<React.SetStateAction<number>>;
}

const Footer = () => {
  

  return (
    <StyledFooter className='container'>
      <div className='logo-wrapper'>
        <LogoWhite className='logo'/>
        <StyledTexts
          className='arrow-link'
          $arrow={true}
          $link={true}
          $size='p4'
        >
          Login
        </StyledTexts>
        <StyledTexts
          className='arrow-link'
          $arrow={true}
          $link={true}
          $size='p4'
        >
          Locations & ATMs
        </StyledTexts>
      </div>

      {ContentFooter.footer_data.map(({ itemTitles, items }, index) => {
        return (
          <FooterItems itemTitles={itemTitles} items={items} key={index} />
        );
      })}
    </StyledFooter>
  );
};

export default Footer;
