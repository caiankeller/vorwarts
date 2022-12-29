import axios from "axios";
import { useEffect, useState } from "react";
import { GiBookshelf } from "react-icons/gi";
import styled from "styled-components";
import Books from "./Books";

export default function Library() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");

  useEffect(() => {
    var reg = new RegExp(book);
    var result = books.map((book) => {
      return reg.test(book.title) || reg.test(book.author)
        ? { ...book, show: true }
        : { ...book, show: false };
    });

    setBooks(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book]);

  useEffect(() => {
    async function gettingBooks() {
      await axios
        .get("https://vorwarts-api.vercel.app/books")
        .then((result) => {
          result = result.data.data.map((book) => {
            return { ...book, show: true };
          });
          setBooks(result);
        });
    }

    gettingBooks();
  }, []);

  return (
    <Container>
      <Title>
        <GiBookshelf />
        Library
      </Title>
      <Subtitle>Filter</Subtitle>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder="book's name"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
      </Form>
      {books.length !== 0 && <Books books={books} />}
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  margin-top: 1rem;
  color: #ED958B;
  font-size: 1.5rem;
  `;
  
  const Subtitle = styled.h2`  
  margin-top: 0.5rem;
  color: #ED958B;
  font-size: 1.2rem;
`;

const Form = styled.form`
  display: flex;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  border-radius: 7px;
  padding: 0.5rem;
  font-family: Inconsolata;
  outline: none;
  // margin-right: 1rem;
  width: 100%;
`;
