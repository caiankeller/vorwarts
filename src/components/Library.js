import { useEffect, useState } from "react";

import styled from "styled-components";
import axios from "axios";
import { GiBookshelf } from "react-icons/gi";

import Books from "./Books";

export default function Library() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("");

  useEffect(() => {
    var reg = new RegExp(book);

    var result = books.map((bk) => {
      return reg.test(bk.title) || reg.test(bk.author)
        ? { ...bk, show: true }
        : { ...bk, show: false };
    });

    setBooks(result);
  }, [book]);

  useEffect(() => {
    async function gettingBooks() {
      await axios
        .get("https://vorwartsapi.herokuapp.com/books")
        .then((result) => {
          result = result.data.data.map((bk) => {
            return { ...bk, show: true };
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
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          type="text"
          placeholder="book's name"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>
      {books.length !== 0 && <Books books={books} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: 100%;
  padding: 0.5rem 0;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #141414;
`;

const Form = styled.form`
  display: flex;
  margin-top: 1rem;
  width: 100%;
`;

const Input = styled.input`
  border-radius: 7px;
  padding: 0.5rem;
  font-family: Inconsolata;
  outline: none;
  margin-right: 1rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: #bde038;
  border: #bde038;
  font-weight: 900;
  color: #141414;
  font-family: Inconsolata;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
`;
