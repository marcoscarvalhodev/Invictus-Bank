import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';
import { GlobalStyle } from './globalStyles';
import ContainerSizes from './Helper/ContainerSizes';
import LazyAnimation from './Helper/LazyAnimation';

const Container = React.lazy(() => import('./Container'));

const App = () => {
  const { xsmall, small, medium, large, xlarge } = ContainerSizes();
  const [activeBx, setActiveBx] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LazyAnimation />}>
        <GlobalStyle $xsmall={xsmall} $activeBx={activeBx} />
        <Container
          setActiveMenu={setActiveBx}
          xsmall={xsmall}
          small={small}
          medium={medium}
          large={large}
          xlarge={xlarge}
        />
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;
