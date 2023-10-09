import React from 'react';
import { StyledContainer } from './Styles/Container.styled.ts';

import Header from './Components/Header/Header.tsx';
import Hero from './Components/Body/Hero/Hero.tsx';

const App = () => {

  return (
    <StyledContainer>
      <Header />
      <Hero />
    </StyledContainer>
  );
};

export default App;
