import styled from "styled-components";
import { Button, Title, Subtitle, Text } from "./styles";

export default function Documentation({ page }) {
  return (
    <Container page={page}>
      <div>
        <Text>
          Vorwärts is not yet released or in its final state. And it will only
          be launched when a better way to support community contribution is
          created. However, the API and library as well as the already hosted
          books are available.
        </Text>
        <Subtitle>Why?</Subtitle>
        <Text>
          Vorwärts was born to be an easy way to get books in the public domain,
          free of any publicity and completely transparent. The ideology of
          Vorwärts is to maintain the neutrality of all these books written by
          incredible authors and which now belong to everyone.
        </Text>
        <Text>Visit GitHub for more information and examples.</Text>
        <Button
          onClick={() => {
            window.open("https://github.com/vonweinkeller/vorwarts-api");
          }}
          style={{ marginTop: "1rem" }}
        >
          GitHub
        </Button>
      </div>
      <Title>Start Using the API</Title>
      <Subtitle>Root</Subtitle>
      <Text>https://vorwartsapi.herokuapp.com</Text>
      <Subtitle>EndPoints</Subtitle>
      <Text>
        In the moment, just /books endpoint are available. But soon there'll be
        endpoints for request genres, author, countries and languages.
      </Text>
      <Title>/Books</Title>
      <div>
        <Tag>GET | Get books data</Tag>
      </div>
      <Text>All requests are sorted by author ascending..</Text>
      <Subtitle>Params</Subtitle>
      <b>All options are optional</b>
      <List>
        <ListItem>Title</ListItem>
        <ListItem>Author</ListItem>
        <ListItem>
          Year
          <List>
            <ListItem>Year of publication. Ex.: year: "1984". </ListItem>
          </List>
        </ListItem>
        <ListItem>
          Country
          <List>
            <ListItem>
              Stands for the country where the book was originally published.
              The short version of the name should be used. Ex.: country:
              "germany".
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          Language
          <List>
            <ListItem>
              Language originally written, the download options will usually be
              in the same language.
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          Genres
          <List>
            <ListItem>
              A slightly different field. Pass genres that you want, separated
              by commas. Ex.: genres: "Fantasy", "Adventure".
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          Limit
          <List>
            <ListItem>
              Stands for limit of books per request. The default limit is 10.
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          Offset
          <List>
            <ListItem>Skip the first books.</ListItem>
          </List>
        </ListItem>
        <ListItem>
          Groupby
          <List>
            <ListItem>
              Group books by field. Try: author, genres, year, country or
              language.
            </ListItem>
          </List>
        </ListItem>
      </List>
      <Subtitle>HTTP code errors</Subtitle>
      <Tag>404</Tag>
      <Text>
        This means that the application has not found any books in these
        specifications. The parameters are case sensitive, so be careful.
      </Text>
      <Tag>406</Tag>
      <Text>
        This means that the 'groupby' selected attribute is not enabled.
      </Text>
      <Text style={{ fontWeight: "bold", marginBottom: "2rem" }}>
        But we response with a nice json saying what exactly happened.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;

  display: ${(props) => (props.page === "documentation" ? "flex" : "none")};
`;

const Tag = styled.div`
  background-color: #f5e560;
  border-radius: 7px;
  width: none;
  padding: 0.3rem 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
  font-family: "Roboto", sans-serif;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-top: 1rem;
  text-indent: 1rem;
  font-weight: bolder;
  font-family: "Roboto", sans-serif;

  li {
    text-indent: 2rem;
    font-weight: normal;
  }
`;
