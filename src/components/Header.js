import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <Container>
      <Body>
        <Logo style={{ fontFamily: "Inter, Roboto" }}>Vorwärts</Logo>
        <Link to="/">
          <Button variant="contained">Home</Button>
        </Link>
      </Body>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-itens: center;
`;

const Body = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100vw;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;
