import React from 'react';

import Home from './Home';
import Savings from './Components/SubPages/Savings/Savings';
import Checking from './Components/SubPages/Checking/Checking';
import Cards from './Components/SubPages/Cards/Cards';

import { Routes, Route } from 'react-router-dom';
import Account from './Components/Account/Account';
import Transfers from './Components/SubPages/Transfers/Transfers';
import Deposits from './Components/SubPages/Deposits/Deposits';
import Rewards from './Components/SubPages/Rewards/Rewards';
import ContainerSizes from './ContainerSizes';

interface AppRoutesProps {
  smallState: 'desktop' | 'mobile';
  mobileBx: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  accountState: number;
  smallMediumState: 'desktop' | 'mobile';
  xsmall: boolean;
  small: boolean;
  medium: boolean;
  large: boolean;
  xlarge: boolean;
}

const AppRoutes = ({
  smallState,
  mobileBx,
  setAccountState,
  accountState,
  smallMediumState,
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
            smallState={smallState}
            setAccountState={setAccountState}
            xsmall={xsmall}
            small={small}
            xlarge={xlarge}
          />
        }
      />

      <Route
        path='account/*'
        element={
          <Account
            smallState={smallState}
            setAccountState={setAccountState}
            accountState={accountState}
            smallMediumState={smallMediumState}
            xsmall={xsmall}
            small={small}
            medium={medium}
          />
        }
      />

      <Route
        path='savings/*'
        element={
          <Savings
            smallState={smallState}
            xsmall={xsmall}
            small={small}
            medium={medium}
          />
        }
      />

      <Route
        path='checking/*'
        element={
          <Checking
            smallState={smallState}
            xsmall={xsmall}
            small={small}
            medium={medium}
          />
        }
      />

      <Route
        path='cards/*'
        element={<Cards smallState={smallState} small={small} />}
      />

      <Route
        path='transfers/*'
        element={
          <Transfers smallState={smallState} small={small} xsmall={xsmall} />
        }
      />

      <Route
        path='deposits/*'
        element={<Deposits smallState={smallState} small={small} />}
      />

      <Route
        path='rewards/*'
        element={<Rewards smallState={smallState} small={small} />}
      />
    </Routes>
  );
};

export default AppRoutes;
