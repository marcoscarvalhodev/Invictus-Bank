import React from 'react';
import { StyledHeadings } from '../Styles/Reusable/Headings.styled';
import { StyledNoMatch } from '../Styles/NoMatch.styled';
import Error404 from '../assets/svg/nomatch/404-error.svg?react';
import { StyledTexts } from '../Styles/Reusable/Texts.styled';
import { NavLink } from 'react-router-dom';
import Head from './Head';
import Outlet from '../assets/svg/nomatch/outlet.svg?react'


interface NoMatchProps {
  setFooterState?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoMatch = ({ setFooterState }: NoMatchProps) => {
  React.useEffect(() => {
    if (setFooterState) {
      setFooterState(false);

      return () => setFooterState(true);
    }
  });

  return (
    <StyledNoMatch className='container'>
      <Head
        title='Error 404'
        description='Error 404 section of Supreme Bank application'
      />
      <div className='flex-1'>
      <Outlet />
      </div>

      <div className='flex-2'>
        <Error404 className='error-404' />
        <StyledHeadings as='h1' className='error-title'>
          Error
        </StyledHeadings>
        <div className='error-link-wrapper'>
          <StyledTexts $size='p1'>
            It seems the page you are trying to access doesn't exist.
          </StyledTexts>

          <StyledTexts $size='p1'>
            Please check the URL, or go to...
          </StyledTexts>
          <NavLink to='/'>
            <StyledTexts
              $size='p1'
              $arrow={true}
              $link={true}
              className='error-link'
            >
              Home
            </StyledTexts>
          </NavLink>
        </div>
      </div>
    </StyledNoMatch>
  );
};

export default NoMatch;
