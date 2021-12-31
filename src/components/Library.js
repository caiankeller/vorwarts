import { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, CircularProgress } from "@mui/material";
import Book from "./Book";
import axios from "axios";

export default function Library() {
  const [books, setBooks] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://vorwartsapi.herokuapp.com/books")
      .then((e) => setBooks(e.data.data));
  }, []);

  return (
    <Container>
      <Body>
        <Typography variant="h3" component="div">
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
            <CircularProgress color="inherit" />
          </Loading>
        )}
      </Body>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #402be2;
`;

const Body = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-itens: center;
  flex-direction: column;
  padding: 1rem;
  height: 100vh;
`;

const Books = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;

  margin-top: 1rem;

  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  border-radius: 10px;
  background-color: #141414;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
