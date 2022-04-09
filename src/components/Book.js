import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { MdClose, MdDownload, MdInfo, MdLanguage } from "react-icons/md";
import styled from "styled-components";

export default function Book({ book }) {
  const [download, setDownload] = useState(false);
  const [info, setInfo] = useState(false);

  return (
    <Container>
      <div>
        <Title>
          {book.title}
          <div
            style={{
              display: "flex",
              marginLeft: "0.5rem",
              zIndex: 1,
            }}
          >
            {info ? (
              <MdClose size="20" onClick={() => setInfo(!info)} />
            ) : (
              <MdInfo size="20" onClick={() => setInfo(!info)} />
            )}
<<<<<<< HEAD
            {typeof book.files !== "undefined" && (
=======
            {typeof book.files !== "undefined" ? (
>>>>>>> c1eb675c11d01e23194d911529a81a866cb38d95
              <MdDownload
                size="20"
                style={{ marginLeft: "0.5rem" }}
                onClick={() => setDownload(!download)}
              />
            ) : null}
          </div>
        </Title>
        <Author>{book.author}</Author>
      </div>

      <div>
        <Subtitle>
          {book.country} ({book.year})
          <ReactCountryFlag
            countryCode={book.countryCode.slice(0, 2)}
            aria-label={book.country}
            style={{ marginLeft: "0.5rem" }}
          />
        </Subtitle>
        <Subtitle style={{ fontWeight: "900" }}>
          {book.language} <MdLanguage style={{ marginLeft: "0.5rem" }} />
        </Subtitle>
        <Genres>
          {book.genres.map((genre, key) => {
            return <Genre key={key}>{genre} · </Genre>;
          })}
        </Genres>
      </div>

      {typeof book.files !== "undefined" ? (
        <Download open={download}>
          <Downloads>
            {book.files.map((file, key) => {
              return (
                <Link href={file.url} key={key}>
                  <MdDownload style={{ marginRight: "0.5rem" }} />
<<<<<<< HEAD
                  Download {file.type} edition, format {file.extension}
=======
                  Download {file.type} edution, format {file.extension}
>>>>>>> c1eb675c11d01e23194d911529a81a866cb38d95
                </Link>
              );
            })}
          </Downloads>
<<<<<<< HEAD
        </Download>
      ) : null}
=======
        </Download>) : null}
>>>>>>> c1eb675c11d01e23194d911529a81a866cb38d95

      <Info open={info}>
        <Text>{JSON.stringify(book, null, 2)}</Text>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
<<<<<<< HEAD
  background-color: #ffc107;
  color: #141414;
=======
  background-color: #141414;
  color: white;
>>>>>>> c1eb675c11d01e23194d911529a81a866cb38d95
  height: 350px;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 540px) {
    height: 250px;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  text-align: justify;
`;

const Subtitle = styled(Title)`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Author = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
`;

const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Genre = styled.li`
  color: #141414;
<<<<<<< HEAD
  font-family: "Bebas Neue", cursive;
=======
  margin-top: 0.5rem;
  padding: 0.2rem 0.5rem;
  background-color: white;
>>>>>>> c1eb675c11d01e23194d911529a81a866cb38d95
  border-radius: 5px;
  font-size: 1.3rem;
  margin-right: 0.5rem;
`;

const Download = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem 1rem 1rem;
  border-radius: 5px;
  position: absolute;
  top: ${(props) => (props.open ? 0 : "100%")};
  left: 0;
  background: #141414;
  color: white;
  border: 1px solid white;
  transition: all 150ms ease-out;
  opacity: ${(props) => (props.open ? 1 : 0)};
  height: ${(props) => props.open && "100%"};
  width: 100%;
`;

const Downloads = styled.div``;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 900;
`;

const Info = styled(Download)`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Text = styled.pre`
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
`;
