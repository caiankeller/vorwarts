import styled from "styled-components";
import { Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Container>
      <Body>
        <Typography variant="h1" component="div">
          404 not found
        </Typography>
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
  height: 100vh;
  background-color: #fff;
`;

const Body = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100vw;
`;
