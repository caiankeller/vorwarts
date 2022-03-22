import styled from "styled-components";
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <div>
        <Logo>
          <GiBookshelf color="#7c5ce6" size="40" />
          <Title>Building people's public domain library</Title>
        </Logo>
        <Text>
          Vorwärts was born to be an easy way to get books in the public domain,
          free of any publicity and completely transparent. The ideology of
          Vorwärts is to maintain the neutrality of all these books written by
          incredible authors and which now belong to everyone.
        </Text>
      </div>
      <Buttons>
        <Button to="library">
          <span>Library</span>
        </Button>
        <Button to="documentation " noFill="true">
          <span>Documentation</span>
        </Button>
        <Button to="help" noFill="true">
          <span>I want to help!</span>
        </Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  height: 100%;

  @media only screen and (max-width: 400px) {
    justify-content: space-around;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-itens: center;
  flex-wrap: wrap;
  width: 100%;
  text-shadow: 2px 2px 15px 5px #000;
  color: #7c5ce6;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
`;

const Text = styled.p`
  font-size: 1.3rem;
  padding: 0 2rem;
  text-align: justify;
  margin-top: 1rem;

  @media only screen and (max-width: 550px) {
    padding: 0 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Button = styled(Link)`
  margin-top: 1rem;
  padding: 0.5rem;
  margin-right: 1rem;
  border: none;
  background-color: ${(props) => (!props.noFill ? "#7c5ce6" : "#fff")};
  border: ${(props) => props.noFill && "solid 1px #7c5ce6"};
  font-weight: 900;
  color: ${(props) => (props.noFill ? "#7c5ce6" : "#fff")};
  font-family: Inconsolata;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 5px;
`;
