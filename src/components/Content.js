import styled from "styled-components";
import { Title } from "./styles";

import Library from "./Library";
import Documentation from "./Documentation";

export default function Content({ activePage }) {
  return (
    <Container>
      <Title>{activePage}</Title>
      <Documentation page={activePage} />
      <Library page={activePage} />
    </Container>
  );
}

const Container = styled.div`
  @media only screen and (max-width: 766px) {
    padding: 0 0.5rem;
  }
  padding: 0 1rem;
`;
