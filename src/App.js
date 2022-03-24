import styled from "styled-components";

import Home from "./components/Home";
import Documentation from "./components/Documentation";
import Header from "./components/Header";
import Library from "./components/Library";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Container>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/library" element={<Library />} />
        </Routes>
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
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  overflow: scroll;

  max-width: 1000px;
  width: 100%;
  height: 100%;
  padding: 1rem;
  
  @media only screen and (max-width: 766px) {
    padding: 0.5rem;
  }
`;
