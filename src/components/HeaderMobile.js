import styled from "styled-components";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HeaderMobile() {
  const [actived, setActived] = useState(false);
  useEffect(() => {
    console.log(actived);
  }, [actived]);

  return (
    <Container>
      <Body>
        <Logo style={{ fontFamily: "Inter, Roboto" }}>Vorwärts</Logo>
        <Button
          variant="contained"
          onClick={() => {
            setActived(!actived);
          }}
        >
          Menu
        </Button>
        <Buttons actived={actived}>
          <Link to="/">
            <Button fullWidth variant="contained">
              Home
            </Button>
          </Link>
          <Link to="/library">
            <Button fullWidth variant="contained" style={{ marginTop: "1rem" }}>
              Library
            </Button>
          </Link>
          <Button
            fullWidth
            variant="contained"
            style={{ marginTop: "1rem" }}
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

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-itens: center;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Buttons = styled.div`
  z-index: 2;
  position: absolute;
  background-color: #fff;
  display: block;
  top: ${(props) => (props.actived ? "4rem" : "-60rem")};
  opacity: ${(props) => (props.actived ? "1" : "0")};
  right: 0rem;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  height: 100%;
  transition: all 300ms ease-in-out;
`;
