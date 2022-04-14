import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { MdClose, MdDownload, MdInfo, MdLanguage } from "react-icons/md";
import styled from "styled-components";

export default function Book({ book, width }) {
  const [download, setDownload] = useState(false);
  const [info, setInfo] = useState(false);

  return (
    <Container width={width}>
      <div>
        <Title>
          {book.title}
          <Menu light={download || info ? true : false}>
            {info ? (
              <MdClose size="20" onClick={() => setInfo(!info)} />
            ) : (
              <MdInfo size="20" onClick={() => setInfo(!info)} />
            )}
            {typeof book.files !== "undefined" && (
              <MdDownload
                size="20"
                style={{ marginLeft: "0.5rem" }}
                onClick={() => setDownload(!download)}
              />
            )}
          </Menu>
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

      <Download open={download}>
        {book.files.length === 0 && (
          <Subtitle style={{ color: "#ffc107" }}>
            There's no download options yet.
          </Subtitle>
        )}
        <Downloads>
          {book.files.map((file, key) => {
            return (
              <Link href={file.url} key={key}>
                <MdDownload style={{ marginRight: "0.5rem" }} />
                Download {file.type} edition, format {file.extension}
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
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 1rem;
  border-radius: 5px;
  background-color: #ffc107;
  color: #141414;
  height: 350px;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 540px) {
    height: 250px;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  text-align: justify;
`;

const Subtitle = styled.h2`
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1rem;
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
  font-family: "Bebas Neue", cursive;
  margin-top: 0.5rem;
  border-radius: 5px;
  font-size: 1.3rem;
  margin-right: 0.5rem;
`;

const Download = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem 1rem 1rem 1rem;
  border-radius: 5px;
  position: absolute;
  top: ${(props) => (props.open ? 0 : "100%")};
  left: 0;
  background: #141414;
  color: #ffc107;
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
  color: #ffc107;
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

const Menu = styled.div`
  display: flex;
  margin-left: 0.7rem;
  z-index: 1;
  color: ${(props) => (props.light ? "#ffc107" : "#141414")};
`;
