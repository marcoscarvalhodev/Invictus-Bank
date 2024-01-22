import React from 'react';

import Home from './Home';
import Savings from './Components/SubPages/Savings/Savings';
import Checking from './Components/SubPages/Checking/Checking';
import Cards from './Components/SubPages/Cards/Cards';

import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';

interface AppRoutesProps {
  smallState: 'desktop' | 'mobile';
  mobileBx: boolean;
}

const AppRoutes = ({ smallState, mobileBx }: AppRoutesProps) => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home mobileBx={mobileBx} smallState={smallState} />}
      />

      <Route path='login/*' element={<Login smallState={smallState}/>} />

      <Route path='savings/*' element={<Savings smallState={smallState} />} />

      <Route path='checking/*' element={<Checking smallState={smallState} />} />

      <Route path='cards/*' element={<Cards smallState={smallState} />} />
    </Routes>
  );
};

export default AppRoutes;
