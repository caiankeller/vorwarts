import styled from "styled-components";
import Book from "../components/Book";

const Container = styled.div`
  background-color: white;
`;

const Home = () => {
  return (
    <Container>
      {JSON.parse(localStorage.getItem("books")).map((book, key) => {
        return <Book key={key} book={book} />;
      })}
    </Container>
  );
};

export default Home;
