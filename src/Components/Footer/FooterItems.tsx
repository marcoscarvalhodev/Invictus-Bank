import React from 'react';
import { StyledFooterItems } from '../../Styles/Footer/FooterItems.styled';
import { StyledTexts } from '../../Styles/Reusable/Texts.styled';
import { StyledHeadings } from '../../Styles/Reusable/Headings.styled';

interface FooterItemsProps {
  itemTitles: string;
  items: string[];
}

const FooterItems = ({ itemTitles, items }: FooterItemsProps) => {
  return (
    <StyledFooterItems>
      
        <li>
          <StyledHeadings as="h4" className='footer-title'>
            {itemTitles}
          </StyledHeadings>
        </li>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <StyledTexts $size='p4' as="a" href='' className='footer-items'>
                {item}
              </StyledTexts>
            </li>
          );
        })}
      
    </StyledFooterItems>
  );
};

export default FooterItems;
