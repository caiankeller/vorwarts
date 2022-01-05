import styled from "styled-components";
import { Typography, Button } from "@mui/material/";

export default function Book(book) {
  console.log(book);
  return (
    <Container>
      <Typography variant="h6">{book.title}</Typography>
      <Typography variant="title" style={{ marginTop: "0rem" }}>
        {book.author} · {book.year}
      </Typography>
      <Genres>
        {book.genres.map((genre, key) => {
          return (
            <Icon style={{ marginRight: "1rem" }} key={key}>
              {genre}
            </Icon>
          );
        })}
      </Genres>
      {book.downloads.length === 0 ? (
        <Typography variant="title" style={{ marginTop: "1rem" }}>
          There's no download options.
        </Typography>
      ) : (
        <Downloads>
          {book.downloads.map((download) => {
            return (
              <Button
                color="secondary"
                size="small"
                variant="contained"
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
      )}
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: column;
  border-radius: 7px;
  padding: 0.7rem 1rem;
  margin-top: 1rem;
  width: 100%;
  background-color: #141414;
  color: white;
`;

const Genres = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Icon = styled.div`
  font-weight: bold;
  padding: 0.1rem 0.5rem;
  background-color: #8aff8a;
  color: #141414;
  border-radius: 5px;
`;

const Downloads = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:last-child {
    margin-bottom: 0.5rem;
  }
`;
