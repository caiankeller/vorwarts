import styled from "styled-components";
import { Typography, Button } from "@mui/material";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Body>
        <Typography variant="h1" component="div">
          Building a People's Public Digital Library
        </Typography>
        <Buttons style={{ marginTop: "1rem" }}>
          <Link to="/library">
            <Button variant="contained">Library</Button>
          </Link>
          <Link to="/documentation">
            <Button variant="contained" style={{ marginLeft: "1rem" }}>
              Documentation
            </Button>
          </Link>
        </Buttons>
      </Body>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  background-color: #402be2;
`;

const Body = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
  background-color: #402be2;
  padding: 1rem;
`;

const Buttons = styled.div`
  float: left;
`;
