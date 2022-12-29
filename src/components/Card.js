import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ card }) {
  return (
    <Container title={card.title}>
      <div>
        <Title>{card.title}</Title>
        <Text>{card.description}</Text>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <Button to={card.path}>
          <span>{card.title}</span>
        </Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 5px;
  color: #141414;
  height: 350px;
  position: relative;
  overflow: hidden;
  width: 30vw;
  background-color: #ED958B;

  @media only screen and (max-width: 540px) {
    width: 70vw;
  }
`;

const Title = styled.h1`  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  text-align: justify;
`;

const Text = styled.p`
  font-size: 1rem;
  text-align: justify;
  margin-top: 0.3rem;
`;

const Button = styled(Link)`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: #141414;
  border: ${(props) => props.noFill && "solid 1px #bde038"};
  font-weight: 400;
  color: #ED958B;
  font-family: Inconsolata;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
`;
