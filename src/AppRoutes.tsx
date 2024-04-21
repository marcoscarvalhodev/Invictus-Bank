import React from 'react';
import Savings from './Components/SubPages/Savings/Savings';
import Home from './Home';
import Checking from './Components/SubPages/Checking/Checking';
import Cards from './Components/SubPages/Cards/Cards';
import { Routes, Route } from 'react-router-dom';
import Account from './Components/Account/Account';
import Transfers from './Components/SubPages/Transfers/Transfers';
import Deposits from './Components/SubPages/Deposits/Deposits';
import Rewards from './Components/SubPages/Rewards/Rewards';
import Careers from './Components/SubPages/Careers/Careers';
import CareersDetails from './Components/SubPages/Careers/CareersDetails';
import NoMatch from './Helper/NoMatch';
import { UserContext } from './UserContext';
import CareersForm from './Components/SubPages/Careers/CareersForm/CareersForm';
import About from './Components/SubPages/About/About';

interface AppRoutesProps {
  mobileBx: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  setFooterState: React.Dispatch<React.SetStateAction<boolean>>;
  accountState: number;
  xsmall: boolean;
  small: boolean;
  medium: boolean;
  large: boolean;
  xlarge: boolean;
}

const AppRoutes = ({
  mobileBx,
  setAccountState,
  accountState,
  xsmall,
  small,
  medium,
  large,
  xlarge,
  setFooterState,
}: AppRoutesProps) => {
  const { loginState } = React.useContext(UserContext);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Home
            mobileBx={mobileBx}
            setAccountState={setAccountState}
            xsmall={xsmall}
            small={small}
            xlarge={xlarge}
            loginState={loginState}
          /> //needed to use media query custom hook
        }
      />

      {loginState ? (
        <></>
      ) : (
        <Route
          path='account/*'
          element={
            <Account
              setAccountState={setAccountState}
              accountState={accountState}
              setFooterState={setFooterState}
            />
          }
        />
      )}

      <Route
        path='savings/*'
        element={<Savings small={small} />} //needed to use media query custom hook
      />

      <Route path='checking/*' element={<Checking />} />

      <Route path='cards/*' element={<Cards />} />

      <Route path='transfers/*' element={<Transfers />} />

      <Route path='deposits/*' element={<Deposits />} />

      <Route
        path='rewards/*'
        element={
          <Rewards small={small} /> //needed to use media query custom hook
        }
      />

      <Route path='careers' element={<Careers />}>
        <Route
          path='job/:idParams'
          element={<CareersDetails setFooterState={setFooterState} />}
        />
        <Route
          path='job/:idParams/form'
          element={<CareersForm setFooterState={setFooterState} />}
        />
      </Route>

      <Route path='about' element={<About />}></Route>

      <Route path='*' element={<NoMatch setFooterState={setFooterState} />} />
    </Routes>
  );
};

export default AppRoutes;
