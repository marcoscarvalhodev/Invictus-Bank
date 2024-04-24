import React from 'react';
import { StyledFooter } from '../../Styles/Footer/Footer.styled';
import { ContentFooter } from '../../Contents';
import FooterItems from './FooterItems';
import LogoWhite from '../../assets/svg/logosb-white.svg?react';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';
import Facebook from '../../assets/svg/icon-facebook.svg?react';
import Twitter from '../../assets/svg/icon-twitter.svg?react';
import Instagram from '../../assets/svg/icon-instagram.svg?react';
import Youtube from '../../assets/svg/icon-youtube.svg?react';

const Footer = () => {
  const [date, setDate] = React.useState<number | null>(null);

  React.useEffect(() => {
    const dateYear = new Date().getFullYear();

    setDate(dateYear);
  }, []);

  return (
    <StyledFooter>
      <div className='container footer-wrapper'>
        <div className='logo-wrapper'>
          <LogoWhite className='logo' />
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

        <div className='footer-rights'>
          <ul className='social-icons-wrapper'>
            <li className='social-icons'>
              <a href='https://facebook.com' target='_blank'>
                <Facebook />
              </a>
            </li>
            <li className='social-icons'>
              <a href='https://youtube.com' target='_blank'>
                <Youtube />
              </a>
            </li>
            <li className='social-icons'>
              <a href='https://www.instagram.com' target='_blank'>
                <Instagram />
              </a>
            </li>
            <li className='social-icons'>
              <a href='https://twitter.com' target='_blank'>
                <Twitter />
              </a>
            </li>
          </ul>

          <StyledTexts $size='p2' className='footer-rights-text'>
            © Supreme Bank. All Rights Reserved {`${date && date}`}.
          </StyledTexts>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
