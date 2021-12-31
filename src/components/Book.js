import styled from "styled-components";
import { Typography, Button } from "@mui/material/";

export default function Book(book) {
  return (
    <Container>
      <Left>
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
      </Left>
      <Right>
        <Button fullWidth disabled variant="contained">
          Download
        </Button>
      </Right>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  padding: 0.7rem 1rem;
  margin: 0.5rem 0;
  width: 100%;
  background-color: black;
  backdrop-filter: blur(14px);
  background-color: #402be2;

  @media only screen and (max-width: 755px) {
    flex-direction: column;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  @media only screen and (max-width: 755px) {
    margin-top: 1rem;
  }
`;

const Genres = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Icon = styled.div`
  font-weight: bold;
  padding: 0.1rem 0.5rem;
  background-color: #8aff8a;
  border-radius: 5px;
`;
