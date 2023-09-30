import React from "react";
import { StyledContainer } from "./Styles/Container.styled.ts";
import { StyledHeadings } from "./Styles/Headings.styled.ts";
import { StyledParagraphs } from "./Styles/Paragraphs.styled.ts";
import useMedia from "./Hooks/useMedia.tsx";
import Header from "./Components/Header.tsx";

const container_xl = "1440px";
const container_l = "1140px";
const container_m = "960px";
const container_s = "540px";

const App = () => {
  const xlarge = useMedia(`(min-width: ${container_xl})`);
  const large = useMedia(
    `(max-width: ${container_xl}) and (min-width: ${container_l})`
  );
  const medium = useMedia(
    `(max-width: ${container_l}) and (min-width: ${container_m})`
  );
  const small = useMedia(`(max-width: ${container_m})`);
  const xsmall = useMedia(`(max-width: ${container_s})`);

  return <StyledContainer>
    <Header />
  </StyledContainer>;
};

export default App;
