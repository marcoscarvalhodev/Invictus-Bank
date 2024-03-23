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

interface AppRoutesProps {
  mobileBx: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
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
}: AppRoutesProps) => {
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
          /> //needed to use media query custom hook
        }
      />

      <Route
        path='account/*'
        element={
          <Account
            setAccountState={setAccountState}
            accountState={accountState}
          />
        }
      />

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

      <Route path='careers/*' element={<Careers />} />
    </Routes>
  );
};

export default AppRoutes;
