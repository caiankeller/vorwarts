import styled from "styled-components";
import { Link } from "react-router-dom";

import { SiGithub } from "react-icons/si";

export default function Header() {
  return (
    <Container>
      <Title to="/">Vorwärts</Title>
      <Button
        onClick={() =>
          window.open("https://github.com/vonweinkeller/vorwarts-api")
        }
      >
        <SiGithub size="25" color="#141414" />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled(Link)`
  font-size: 2rem;
  color: #141414;
  text-decoration: none;
  font-weight: 900;
`;

const Button = styled.button`
  border: none;
  background: none;
`;
