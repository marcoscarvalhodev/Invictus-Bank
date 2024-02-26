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

interface AppRoutesProps {
  smallState: 'desktop' | 'mobile';
  mobileBx: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  accountState: number;
  smallMediumState: 'desktop' | 'mobile';
}

const AppRoutes = ({
  smallState,
  mobileBx,
  setAccountState,
  accountState,
  smallMediumState,
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
          />
        }
      />

      <Route path='savings/*' element={<Savings smallState={smallState} />} />

      <Route path='checking/*' element={<Checking smallState={smallState} />} />

      <Route path='cards/*' element={<Cards smallState={smallState} />} />

      <Route
        path='transfers/*'
        element={<Transfers smallState={smallState} />}
      />

      <Route path='deposits/*' element={<Deposits smallState={smallState} />} />

      <Route path='rewards/*' element={<Rewards smallState={smallState} />} />
    </Routes>
  );
};

export default AppRoutes;
