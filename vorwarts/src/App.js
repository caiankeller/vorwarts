import styled from "styled-components";

import Home from "./components/Home";

export default function App() {
  return (
    <Container>
      <Box>
        <Home />
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;

  @media only screen and (max-width: 766px) {
    padding: 0.5rem;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 1000px;
  width: 100%;
  height: 100%;
`;
