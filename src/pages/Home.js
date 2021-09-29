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
  width: 100%;
  background: linear-gradient(180deg, #e23c52, #e23c52a1);
  box-shadow: 0 0 20px #e23c52a1;
  border-radius: 10px;
  padding: 1rem;
  padding-bottom: 0;

  @media (max-width: 1134px) {
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
    margin-top: 0.2rem;
    text-indent: 2rem;
    color: #fafafa;
    text-align: justify;
  }
`;

const Books = styled.div``;

const Skeleton = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 100%;

  height: 12rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  color: white;
  padding: 1rem;
  background-image: linear-gradient(#bfbfbf, #bfbfbfa1);

  @media (max-width: 430px) {
    grid-template-columns: 1fr;
    height: 18rem;
  }
`;

const SkeletonCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .skeletonCover {
    border-radius: 10px;
    background-color: #242424;
    height: 150px;
    width: 100px;
  }
`;

const SkeletonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .skeletonContent {
    border-radius: 10px;
    height: 2rem;
    width: 100%;
    margin: 1rem;
    background-color: #242424;
  }
`;

const SkeletonCard = () => {
  return (
    <>
      <Skeleton>
        <SkeletonCover>
          <div className="skeletonCover"></div>
        </SkeletonCover>
        <SkeletonContent>
          <div className="skeletonContent" />
          <div className="skeletonContent" />
        </SkeletonContent>
      </Skeleton>

      <Skeleton>
        <SkeletonCover>
          <div className="skeletonCover"></div>
        </SkeletonCover>
        <SkeletonContent>
          <div className="skeletonContent" />
          <div className="skeletonContent" />
        </SkeletonContent>
      </Skeleton>

      <Skeleton>
        <SkeletonCover>
          <div className="skeletonCover"></div>
        </SkeletonCover>
        <SkeletonContent>
          <div className="skeletonContent" />
          <div className="skeletonContent" />
        </SkeletonContent>
      </Skeleton>

      <Skeleton>
        <SkeletonCover>
          <div className="skeletonCover"></div>
        </SkeletonCover>
        <SkeletonContent>
          <div className="skeletonContent" />
          <div className="skeletonContent" />
        </SkeletonContent>
      </Skeleton>

      <Skeleton>
        <SkeletonCover>
          <div className="skeletonCover"></div>
        </SkeletonCover>
        <SkeletonContent>
          <div className="skeletonContent" />
          <div className="skeletonContent" />
        </SkeletonContent>
      </Skeleton>
    </>
  );
};

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/vonweinKeller/vorwarts-library/main/books.json"
      )
      .then((res) => {
        setBooks(res.data);
        setLoading(currentValue => !currentValue);
      });
  }, []);

  return (
    <>
      <Container>
        <LeftPanel>
          <About>
            <span>Disclaimer</span>
            <p>
              These books are in the public domain in their country of origin
              and are legally free to use. To avoid problems, you should check
              the copyright laws in your country.
            </p>
          </About>
        </LeftPanel>
        <Books>
          {isLoading ? <SkeletonCard /> : ""}

          {books.map((book) => {
            return <Book key={book.id} book={book} />;
          })}
        </Books>
      </Container>
      <br />
    </>
  );
};

export default Home;
