import React from "react";
import { ThemeProvider } from "styled-components";
import Container from "./Container";
import theme from "./Styles/theme";
import GlobalStyle from "./globalStyles";

const App = () => {
  const [activeBx, setActiveBx] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle $activeBx={activeBx}/>
      <Container setActiveMenu={setActiveBx}/>
    </ThemeProvider>
  );
};

export default App;
