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
    <Container style={{ marginTop: "1rem" }}>
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

const Container = styled.div``;

const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #5500ff;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;

  @media only screen and (max-width: 550px) {
    font-size: 2.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  padding: 0 0.5rem;
  text-align: justify;

  @media only screen and (max-width: 550px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
`;
