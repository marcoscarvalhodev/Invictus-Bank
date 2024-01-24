import React from 'react';

import Home from './Home';
import Savings from './Components/SubPages/Savings/Savings';
import Checking from './Components/SubPages/Checking/Checking';
import Cards from './Components/SubPages/Cards/Cards';

import { Routes, Route } from 'react-router-dom';
import Account from './Components/Account/Account';

interface AppRoutesProps {
  smallState: 'desktop' | 'mobile';
  mobileBx: boolean;
  setAccountState: React.Dispatch<React.SetStateAction<number>>;
  accountState: number;
}

const AppRoutes = ({ smallState, mobileBx, setAccountState, accountState }: AppRoutesProps) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home mobileBx={mobileBx} smallState={smallState} setAccountState={setAccountState}/>}
      />

      <Route path='account/*' element={<Account smallState={smallState} setAccountState={setAccountState} accountState={accountState}/>} />

      <Route path='savings/*' element={<Savings smallState={smallState} />} />

      <Route path='checking/*' element={<Checking smallState={smallState} />} />

      <Route path='cards/*' element={<Cards smallState={smallState} />} />
    </Routes>
  );
};

export default AppRoutes;
