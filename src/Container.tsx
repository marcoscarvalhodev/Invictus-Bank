import React from "react";
import { StyledContainer } from "./Styles/Container.styled.ts";
import theme from "./Styles/theme.ts";
import useMedia from "./Hooks/useMedia.tsx";
import Header from "./Components/Header.tsx";

const App = () => {
  const xlarge = useMedia(`(min-width: ${theme.containerSizes.container_xl})`);
  const large = useMedia(
    `(max-width: ${theme.containerSizes.container_xl}) and (min-width: ${theme.containerSizes.container_l})`
  );
  const medium = useMedia(
    `(max-width: ${theme.containerSizes.container_l}) and (min-width: ${theme.containerSizes.container_m})`
  );
  const small = useMedia(`(max-width: ${theme.containerSizes.container_m})`);
  const xsmall = useMedia(`(max-width: ${theme.containerSizes.container_s})`);

  return (
    <StyledContainer>
      <Header small={small} />
    </StyledContainer>
  );
};

export default App;
