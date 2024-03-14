import React from 'react';
import { ThemeProvider } from 'styled-components';
import Container from './Container';
import theme from './Styles/theme';
import { GlobalStyle } from './globalStyles';
import ContainerSizes from './ContainerSizes';

const App = () => {
  const { xsmall, small, medium, large, xlarge } = ContainerSizes();
  const [activeBx, setActiveBx] = React.useState(false);

  const [smallState, setSmallState] = React.useState<'mobile' | 'desktop'>(
    'desktop'
  );
  const [smallMediumState, setSmallMediumState] = React.useState<
    'mobile' | 'desktop'
  >('desktop');

  React.useEffect(() => {
    small ? setSmallState('mobile') : setSmallState('desktop');

    small || medium
      ? setSmallMediumState('mobile')
      : setSmallMediumState('desktop');
  }, [small, medium, smallMediumState]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle $xsmall={xsmall} $activeBx={activeBx} />
      <Container
        setActiveMenu={setActiveBx}
        xsmall={xsmall}
        small={small}
        medium={medium}
        large={large}
        xlarge={xlarge}
        smallState={smallState}
        smallMediumState={smallMediumState}
      />
    </ThemeProvider>
  );
};

export default App;
