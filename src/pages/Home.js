import styled from "styled-components";
import Book from "../components/Book";
import axios from "axios";

import { useState, useEffect } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 1 3;
  grid-gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  background: linear-gradient(180deg, #e23c52, #e23c52a1);
  box-shadow: 0 0 20px #e23c52a1;
  border-radius: 10px;
  padding: 1rem;

  @media(max-width: 1134px) {
    display: flex;
    flex-direction: column;
  }
`;

const LeftPanel = styled.div``;

const About = styled.div`
  border-radius: 10px;
  background-color: #242424;
  padding: 1rem;

  span {
    font-family: "Bebas Neue", cursive;
    font-size: 1.5rem;
    color: white;
    font-weight: bolder;
  }

  p {
    display: block;
    margin-top: 0.5rem;
    text-indent: 2rem;
    color: #fafafa;
    text-align: justify;
    line-height: 1.3rem;
    letter-spacing: 0.1rem;
  }
`;

const Control = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  height: 400px;
  border-radius: 10px;
  background-color: #fff38e;
  box-shadow: #fff38ea1;

  input {
    width: 70%;
  }
`;

const Books = styled.div``;

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/vonweinKeller/vorwarts-library/main/books.json"
      )
      .then((res) => {
        setBooks(res.data);
      });
  }, []);

  console.log(books);

  return (
    <>
      <Container>
        <LeftPanel>
          <About>
            <span>Disclaimer</span>
            <p>
              Check the public domain status of each book in your country before
              you get it. We do not endorse criminal acts. To request take down
              content, please, e-mail caiankeller@icloud.com
            </p>
          </About>

          <Control>
            <input></input>
          </Control>
        </LeftPanel>
        <Books>
          {books.map((book, key) => {
            return <Book key={key} book={book} />;
          })}
        </Books>
      </Container>
      <br/>
    </>
  );
};

export default Home;
