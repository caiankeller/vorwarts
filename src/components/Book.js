import { useState } from "react";

import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";

import { MdLanguage, MdDownload, MdClose, MdInfo } from "react-icons/md";

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
              color: "#bde038",
              marginLeft: "0.5rem",
              zIndex: 1,
            }}
          >
            {info ? (
              <MdClose size="20" onClick={() => setInfo(!info)} />
            ) : (
              <MdInfo size="20" onClick={() => setInfo(!info)} />
            )}
            {book.downloads.length !== 0 && (
              <MdDownload
                size="20"
                style={{ marginLeft: "0.5rem" }}
                onClick={() => setDownload(!download)}
              />
            )}
          </div>
        </Title>
        <Author>{book.author}</Author>
      </div>

      <div>
        <Subtitle>
          {book.country} ({book.year})
          <ReactCountryFlag
            countryCode="ua"
            aria-label={book.country}
            style={{ marginLeft: "0.5rem" }}
          />
        </Subtitle>
        <Subtitle style={{ fontWeight: "900" }}>
          {book.language} <MdLanguage style={{ marginLeft: "0.5rem" }} />
        </Subtitle>
        <Genres>
          {book.genres.map((genre, key) => {
            return <Genre key={key}>{genre}</Genre>;
          })}
        </Genres>
      </div>

      <Download open={download}>
        <Downloads>
          {book.downloads.map((download, key) => {
            return (
              <Link href={download} key={key}>
                <MdDownload style={{ marginRight: "0.5rem" }} />
                Download {download.substring(download.lastIndexOf("."))}
              </Link>
            );
          })}
        </Downloads>
      </Download>
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
  background: linear-gradient(45deg, #5500ff, #621bfa);
  color: #141414;
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
  align-itens: center;
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
`;

const Genre = styled.li`
  color: #141414;
  margin-top: 0.5rem;
  padding: 0.2rem 0.5rem;
  background-color: #bde038;
  border-radius: 5px;
  margin-right: 0.5rem;
  font-weight: 900;
`;

const Download = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 5px;
  position: absolute;
  top: ${(props) => (props.open ? 0 : "100%")};
  left: 0;
  background: #141414;
  color: #5500ff;
  border: 1px solid #5500ff;
  transition: all 150ms ease-out;
  opacity: ${(props) => (props.open ? 1 : 0)};
  height: ${(props) => props.open && "100%"};
  width: 100%;
`;

const Downloads = styled.div``;

const Link = styled.a`
  display: flex;
  align-itens: center;
  color: #5500ff;
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
