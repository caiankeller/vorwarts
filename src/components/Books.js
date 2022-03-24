import styled from "styled-components";

import Book from "./Book";

export default function Books({ books }) {
  return (
    <Container>
      {books.map((book, key) => {
        return book.show && <Book key={key} book={book} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 350px;
  grid-gap: 1rem;
  margin-top: 0.5rem;

  @media only screen and (max-width: 810px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0.5rem;
  }

  @media only screen and (max-width: 540px) {
    grid-auto-rows: 250px;
  }
`;
