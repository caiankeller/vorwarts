import styled from "styled-components";

import HeaderMobile from "./components/HeaderMobile";
import Header from "./components/Header";
import Home from "./components/Home";
import Library from "./components/Library";
import NotFound from "./components/NotFound";

import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const size = useWindowSize();
  return (
    <Router>
      <Container>
        {size.width > 560 ? <Header /> : <HeaderMobile />}
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem;
  overflow: hidden;

  max-width: 1000px;
  width: 100%;
`;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
