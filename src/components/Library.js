import { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, CircularProgress } from "@mui/material";
import Book from "./Book";

import axios from "axios";

export default function Library() {
  const [books, setBooks] = useState(false);

  useEffect(() => {
    axios
      .get("https://vorwartsapi.herokuapp.com/books")
      .then((e) => setBooks(e.data.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="div">
        Library
      </Typography>
      {books ? (
        <Books>
          {books.map((book, key) => {
            return <Book key={key} {...book} />;
          })}
        </Books>
      ) : (
        <Loading>
          <CircularProgress />
        </Loading>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: top;
  align-items: left;
  flex-direction: column;
`;

const Books = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  width: 100%;
  height: 100%;

  margin-top: 1rem;

  display: flex;
  align-items: left;
  flex-direction: column;
  padding-bottom: 1rem;

  border-radius: 10px;
  background-color: #fff;

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
