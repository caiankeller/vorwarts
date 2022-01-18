import styled from "styled-components";

import { Subtitle, Button } from "./styles";

export default function Book({ book }) {
  console.log(book);
  return (
    <Container>
      <Subtitle>{book.title}</Subtitle>
      <Author>{book.author}</Author>
      <Tags>
        {book.genres.map((genre, key) => {
          return <Tag key={key}>{genre}</Tag>;
        })}
      </Tags>
      <Downloads>
        {book.downloads.map((download, key) => {
          return (
            <Button
              onClick={() => {
                window.open(download);
              }}
              style={{ marginTop: "1rem" }}
            >
              Download {download.substring(download.lastIndexOf("."))}
            </Button>
          );
        })}
      </Downloads>
    </Container>
  );
}

const Container = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: #f5e560;
  border-radius: 2px;
`;

const Author = styled.div`
  margin: 0;
  opacity: 0.8;
`;

const Tags = styled.div`
  display: flex;
  width: 100%;
`;

const Tag = styled.div`
  background-color: #141414;
  color: #f5e560;
  padding: 0.3rem 0.8rem;
  margin-right: 0.5rem;
`;

const Downloads = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
