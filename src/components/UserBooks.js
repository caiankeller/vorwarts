import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import AddBook from "./AddBook";
import Book from "./Book";

export default function UserBook({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function gettingBooks() {
      await axios
        .get("https://vorwartsapi.herokuapp.com/books", {
          params: { user: user.username },
        })
        .then((result) => {
          setBooks(result.data.data);
        });
    }

    gettingBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container length={books.length}>
        <Add onClick={() => setIsOpen(!isOpen)}>
          <AiFillPlusCircle size="20" />
          Add book
        </Add>
        {books.map((book, key) => (
          <Book key={key} book={book} width="300px" />
        ))}
      </Container>
      <AddBook token={user.token} isOpen={isOpen} />
    </>
  );
}

const Container = styled(ScrollContainer)`
  display: grid;
  grid-template-columns: repeat(${(props) => ++props.length}, 1fr);
  width: 100%;
  grid-gap: 1rem;
  border-radius: 5px;
  cursor: grab;
  margin-top: 0.2rem;

  @media only screen and (max-width: 540px) {
    grid-gap: 0.5rem;
  }

  &:active {
    cursor: grabbing;
  }
`;

const Add = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 5px;
  font-weight: 900;
  color: #141414;
  min-height: 200px;
  height: auto;
  width: 150px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: white;
  border: dashed 3px #141414;

  &:hover {
    transform: scale(0.98, 0.98);
  }
`;
