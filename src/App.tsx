import React from "react";
import { ThemeProvider } from "styled-components";
import Container from "./Container";
import theme from "./Styles/theme";
import {GlobalStyle} from "./globalStyles";
import ContainerSizes from "./ContainerSizes";

const App = () => {
  const {xsmall, small, medium, large, xlarge} = ContainerSizes();
  const [activeBx, setActiveBx] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle $xsmall={xsmall} $activeBx={activeBx}/>
      <Container setActiveMenu={setActiveBx}/>
    </ThemeProvider>
  );
};

export default App;
