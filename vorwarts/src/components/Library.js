import { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";

import Book from "./Book";

export default function Library({ page }) {
  const [library, setLibrary] = useState();

  useEffect(() => {
    (async function () {
      await axios
        .get("https://vorwartsapi.herokuapp.com/books")
        .then((e) => setLibrary(e.data.data));
    })();
  }, []);

  return (
    <Container page={page}>
      {typeof library !== "undefined" &&
        library.map((book, key) => {
          return <Book book={book} key={key} />;
        })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  display: ${(props) => (props.page === "library" ? "flex" : "none")};
`;
