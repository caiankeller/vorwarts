import { GiBookshelf } from "react-icons/gi";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
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
    {
      title: "Dashboard",
      path: "/dashboard",
      description: "Create your account and help bring new books to Vorwärts.",
    },
  ];

  return (
    <Container style={{ marginTop: "1rem" }}>
      <div>
        <Logo>
          <GiBookshelf size="40" />
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
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #141414;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #ED958B;
  
  @media only screen and (max-width: 550px) {
    font-size: 2.5rem;
  }
  `;
  
  const Text = styled.p`
  color: #ED958B;
  font-size: 1.2rem;
  padding: 0 0.5rem;
  text-align: justify;

  @media only screen and (max-width: 550px) {
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

const Cards = styled(ScrollContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  overflow: scroll;
  grid-gap: 1rem;
  border-radius: 5px;
  cursor: grab;

  @media only screen and (max-width: 540px) {
    grid-gap: 0.5rem;
  }

  &:active {
    cursor: grabbing;
  }
`;