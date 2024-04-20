import React from 'react';
import { StyledContainer } from './Styles/Container.styled.tsx';
import Header from './Components/Header/Header.tsx';
import ScrollToTop from './Hooks/scrollToTop.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';
import { UserContext, UserStorage } from './UserContext.tsx';
import Footer from './Components/Footer/Footer.tsx';

interface ContainerProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  xsmall: boolean;
  small: boolean;
  medium: boolean;
  large: boolean;
  xlarge: boolean;
}

const Container = ({
  setActiveMenu,
  xsmall,
  small,
  medium,
  large,
  xlarge,
}: ContainerProps) => {
  const [mobileBx, setMobileBx] = React.useState(false);
  const [accountState, setAccountState] = React.useState(1);
  const [footerState, setFooterState] = React.useState(true);
  

  React.useEffect(() => {
    setActiveMenu(mobileBx);
  }, [mobileBx, setActiveMenu]);

  return (
    <StyledContainer
     
      className={`${mobileBx ? 'container-active-bx' : ''}`}
    >
      <Router>
        <ScrollToTop />
        <UserStorage>
          <div className='container-wrapper'>
            <Header
              setMobileBx={setMobileBx}
              mobileBx={mobileBx}
              setAccountState={setAccountState}
            />

            <AppRoutes
              mobileBx={mobileBx}
              setAccountState={setAccountState}
              accountState={accountState}
              xsmall={xsmall}
              small={small}
              medium={medium}
              large={large}
              xlarge={xlarge}
              setFooterState={setFooterState}
              
            />

            {footerState && <Footer />}
          </div>
        </UserStorage>
      </Router>
    </StyledContainer>
  );
};

export default Container;
