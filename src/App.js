import styled from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Library from "./components/Library";
import Documentation from "./components/Documentation";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route
            path="/documentation"
            element={
              <>
                <About />
                <Documentation />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: block;
`;
