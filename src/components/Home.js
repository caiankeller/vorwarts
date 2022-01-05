import styled from "styled-components";
import { Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Vorwarts>
        <Typography variant="h1" component="div">
          Building a Digital Public Library
        </Typography>
        <img src="/vorwarts.png" alt="" />
      </Vorwarts>
      <Typography variant="h4" component="div">
        What is vorwärts about
      </Typography>
      <Typography variant="body1">
        Vorwärts was born to be an easy way to get books in the public domain,
        free of any publicity and completely transparent. The ideology of
        Vorwärts is to maintain the neutrality of all these books written by
        incredible authors and which now belong to everyone.
      </Typography>
      <Button variant="contained" style={{ marginTop: "1rem" }}>
        GitHub Library
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;

const Vorwarts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 951px) {
    flex-direction: column;

    img {
      width: 200px;
      height: 200px;
    }
  }
`;
