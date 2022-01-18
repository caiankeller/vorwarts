import { useState, useCallback } from "react";

import styled from "styled-components";

import Header from "./Header";
import Content from "./Content";

export default function Home() {
  const [page, setPage] = useState("library");
  const activePage = useCallback((e) => {
    e !== "library" && setPage("documentation");
    e !== "documentation" && setPage("library");
  }, []);

  return (
    <Container>
      <Header propsActivePage={activePage} activePage={page} />
      <Card />
      <Content activePage={page} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Card = styled.div`
  margin: 1rem;
  height: 20%;
  padding: 1rem;
  background-image: url("/vangogh.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
