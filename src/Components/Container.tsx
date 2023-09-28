import React from "react";
import { StyledContainer } from "../Styles/Container.styled.ts";
import { StyledHeadings } from "../Styles/Headings.styled.ts";
import { StyledParagraphs } from "../Styles/Paragraphs.styled.ts";

const App = () => {
  return (
    <StyledContainer>
      <StyledHeadings as="h1" $device="desktop">
        Heading
      </StyledHeadings>
      <StyledParagraphs $size="p1" $device="desktop">
        Hi we are a bank that want to help you.
      </StyledParagraphs>
    </StyledContainer>
  );
};

export default App;
