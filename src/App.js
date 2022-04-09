import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Authentication from "./components/Authentication";
import Dashboard from "./components/Dashboard";
import Documentation from "./components/Documentation";
import Header from "./components/Header";
import Home from "./components/Home";
import Library from "./components/Library";

export default function App() {
  return (
    <Container>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="library" element={<Library />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/login" element={<Authentication />} />
        </Routes>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Box = styled.div`
  max-width: 1000px;
  width: 100%;
  height: auto;
  padding: 1rem;

  @media only screen and (max-width: 766px) {
    padding: 0.5rem;
  }
`;
