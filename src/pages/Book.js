import styled from "styled-components";
import {
  VscArrowSmallLeft,
  VscArrowSmallRight,
  VscRepo,
} from "react-icons/vsc";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";

const Book = () => {
  const { title } = useParams();

  const [book, setBook] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const gettingBookInfo = () => {
      axios
        .get(
          "https://raw.githubusercontent.com/vonweinKeller/vorwarts-library/main/books.json"
        )
        .then((res) => {
          const bookSelect = res.data.filter((b) => b.title === title);
          setBook(bookSelect[0]);
          setDownloads(bookSelect[0].downloads_avaiable);
          setGenre(bookSelect[0].genre);
        });
    };

    gettingBookInfo();
  }, [title]);

  return (
    <>
      <Container>
        <LeftPanel>
          <Cover src={book.cover_url_hd}></Cover>
        </LeftPanel>
        <RightPanel>
          <Info>
            <Aspect>
              <Title>{book.title}</Title>

              <Autor>
                {book.author}, {book.first_publishment}
              </Autor>
            </Aspect>

            <Genres>
              {genre.map((genre, key) => (
                <span key={key} className="genre">
                  {genre}{" "}
                </span>
              ))}
            </Genres>

            <Wikipedia
              target="_blank"
              rel="noopener noreferrer"
              as={motion.div}
              whileHover={{ scale: 1.019 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 0.97 }}
              onClick={() => (window.location.href = `${book.wikipedia_ulr}`)}
            >
              See book on wikipedia<VscArrowSmallRight></VscArrowSmallRight>
            </Wikipedia>

            <Downloads>
              <ul>
                {Object.keys(downloads).map((version, format, i) => {
                  return (
                    <Download>
                      <ul key={format}>
                        {version}
                        {Object.keys(downloads[version]).map(
                          (extension, url, i) => {
                            return (
                              <li
                                key={format + url + format + format.toString()}
                              >
                                <DownloadButton
                                  onClick={() =>
                                    (window.location.href =
                                      downloads[version][extension])
                                  }
                                >
                                  Download {extension} <VscRepo></VscRepo>
                                </DownloadButton>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </Download>
                  );
                })}
              </ul>
            </Downloads>
          </Info>

          <Back
            as={motion.div}
            whileHover={{ scale: 1.019 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            whileTap={{ scale: 0.97 }}
            onClick={() => (window.location.href = "/")}
          >
            <VscArrowSmallLeft />
            Back to books
          </Back>
        </RightPanel>
      </Container>
      <br />
    </>
  );
};

export default Book;

const Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-gap: 1rem;
  margin-top: 1rem;
  background-color: #e23c52;
  box-shadow: 0 0 20px #e23c52;
  border-radius: 10px;

  @media (max-width: 1337px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cover = styled.img`
  box-shadow: 0 0 20px black;
  height: 640px;
  width: 400px;
  margin: 1rem;

  @media (max-width: 486px) {
    height: 320px;
    width: 200px;
  }
`;

const RightPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  border-radius: 10px;
  height: auto;
  width: 100%;
  background-image: linear-gradient(#242420, #242424);
  padding: 1rem;
  color: white;
  flex-direction: column;
`;

const Back = styled.button`
  font-size: 1.3rem;
  border-radius: 5px;
  text-decoration: none;
  background-color: #fff38e;
  font-family: "Bebas Neue", cursive;
  box-shadow: 0 0 10px #fff38ea1;
  border: none;
  width: 100%;
  margin-top: 1rem;
  color: #242424;
  margin-right: 2rem;
  font-weight: bold;
  padding: 0.3rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  cursor: pointer;
`;

const Wikipedia = styled.a`
  font-size: 1.3rem;
  border-radius: 5px;
  text-decoration: none;
  background-color: #21a3ff;
  font-family: "Bebas Neue", cursive;
  box-shadow: 0 0 10px #21a3ffa1;
  border: none;
  width: 100%;
  margin-top: 1rem;
  color: #242424;
  margin-right: 2rem;
  font-weight: bold;
  padding: 0.3rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  cursor: pointer;
`;

const Info = styled.div``;

const Title = styled.div`
  font-family: "Bebas Neue", cursive;
  font-size: 1.7rem;
`;

const Downloads = styled.div`
  margin-top: 1rem;
  background-color: #424242;
  border-radius: 10px;

  ul {
    margin: 0;
    padding: 0.5rem;
    list-style-type: none;
  }

  @media (max-width: 430px) {
    padding: 0;
  }
`;

const Download = styled.li`
  text-transform: capitalize;
  margin: 0.5rem;

  ul {
    font-weight: bolder;
    padding: 0.6rem;
    margin: 0.5rem;

    li {
      text-transform: none;
    }
  }

  @media (max-width: 430px) {
    ul {
      padding: 0;
      margin: 0;
    }
  }
`;

const DownloadButton = styled.button`
  border: none;
  background: none;
  font-size: 1.1rem;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  color: #fafafa;
  font-weight: bolder;
  height: 1.7rem;
  padding: 0.3rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Aspect = styled.div`
  margin: 0;
`;

const Autor = styled.div`
  text-transform: capitalize;
  font-size: 1rem;
  color: #fafafa80;
`;

const Genres = styled.div`
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  text-indent: 0.2rem;
  padding: 0.2rem;
  text-transform: capitalize;
  background-color: #424242;
  border-radius: 10px;
`;
