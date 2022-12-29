import { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";

export default function Authentication() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Container>
      <Title>Dashboard</Title>
      {!isLogin ? <Login /> : <Register />}
      <Button onClick={() => setIsLogin(!isLogin)}>
        I want to {isLogin ? "login" : "register"}
      </Button>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  margin-top: 1rem;
  color: #ED958B;
  font-size: 1.5rem;
`;

const Button = styled.button`
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: #ED958B;
  font-weight: 900;
  color: #141414;
  font-family: Inconsolata;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
`;
