import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <Body>
        <div style={{ display: "flex" }}>
          <img src="/vorwarts.png" width="30px" height="30px" alt="" />
          <Logo style={{ fontFamily: "Inter, Roboto" }}>Vorwärts</Logo>
        </div>
        <Buttons>
          <Link to="/">
            <Button variant="contained">Home</Button>
          </Link>
          <Link to="/library">
            <Button variant="contained" style={{ marginLeft: "1rem" }}>
              Library
            </Button>
          </Link>
          <Button
            variant="contained"
            style={{ marginLeft: "1rem" }}
            onClick={() => {
              window.location.href =
                "https://github.com/vonweinkeller/vorwarts-api";
            }}
          >
            Documentation
          </Button>
        </Buttons>
      </Body>
    </Container>
  );
}

const Container = styled.header``;

const Body = styled.div`
  max-width: 1000px;
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  position: relative;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Buttons = styled.div`
  display: flex;
`;
