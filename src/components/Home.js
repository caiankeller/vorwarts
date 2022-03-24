import styled from "styled-components";
import { GiBookshelf } from "react-icons/gi";
import Card from "./Card";

export default function Home() {
  const cards = [
    {
      title: "Library",
      path: "/library",
      description: "Discover and download our books.",
    },
    {
      title: "Documentation",
      path: "/documentation",
      description: "Learn more about the project, the goals and how to help.",
    },
  ];
  return (
    <Container>
      <div>
        <Logo>
          <GiBookshelf color="#5500ff" size="40" />
          <Title>Building people's public domain library</Title>
        </Logo>
        <Text>
          Vorwärts was born to be an easy way to get books in the public domain,
          free of any publicity and completely transparent. The ideology of
          Vorwärts is to maintain the neutrality of all these books written by
          incredible authors and which now belong to everyone.
        </Text>
      </div>
      <Cards>
        {cards.map((card, key) => {
          return <Card card={card} key={key} />;
        })}
      </Cards>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  height: 100%;

  @media only screen and (max-height: 750px) {
    display: block;
  }

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
  color: #5500ff;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: justify;
`;

const Text = styled.p`
  font-size: 1.3rem;
  padding: 0 1rem;
  text-align: justify;
  margin-top: 0.5rem;

  @media only screen and (max-width: 550px) {
    padding: 0 0.5rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 350px;
  grid-gap: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media only screen and (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 540px) {
    grid-auto-rows: 250px;
  }
`;
