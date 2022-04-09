import { AiFillApi } from "react-icons/ai";
import { MdLightbulb } from "react-icons/md";
import styled from "styled-components";
import Endpoint from "../documentation/Endpoint";
import axios from "axios";

export default function Documentation() {
  const endpoints = [
    {
      name: "/books",
      description: "GET | Get books data.",
      parameters: [
        "Title",
        "Author",
        'Year | Year of publication. Ex.: "year": "1984".',
        "Country | Stands for the country where the book was originally published.",
        "language | Language originally written, the download options will usually be in the same language.",
        "Genres | A slightly different field. To pass more than one gender, divide it into commas. Ex.: 'genres': 'Fantasy, Children's Book'.",
        "Limit | Stands for limit of books per request. The default limitis 10.",
        "Groupby | roup books by field. Try: author, genres, year, country or language. Ex.: 'groupby': 'author'.",
        "Offset | Skip the first books.",
      ],
      code: `axios.get("https://vorwartsapi.herokuapp.com/books", {
        params: {
          author: "Johann Wolfgang von Goethe",
          groupby: "author"
        }
      })`,
      async request() {
        return await axios
          .get("https://vorwartsapi.herokuapp.com/books", {
            params: {
              author: "Johann Wolfgang von Goethe",
              groupby: "author",
            },
          })
          .then((re) => {
            return re.data.data;
          });
      },
    },
    {
      name: "/genres",
      description: "GET | Get all genres.",
      parameters: [],
      code: `axios.get("https://vorwartsapi.herokuapp.com/genres")`,
      async request() {
        return await axios
          .get("https://vorwartsapi.herokuapp.com/genres")
          .then((re) => {
            return re.data.data;
          });
      },
    },
    {
      name: "/countries",
      description: "GET | Get all countries.",
      parameters: [],
      code: `axios.get("https://vorwartsapi.herokuapp.com/countries")`,
      async request() {
        return await axios
          .get("https://vorwartsapi.herokuapp.com/countries")
          .then((re) => {
            return re.data.data;
          });
      },
    },
  ];

  return (
    <Container>
      <Title> Documentation</Title>
      <Warning>
        Vorwärts is entirely open-source. Don't mind use it in anyway.
      </Warning>
      <Text></Text>
      <Subtitle>Getting Started</Subtitle>
      <Warning>
        <AiFillApi style={{ marginRight: "0.5rem" }} />
        https://vorwartsapi.herokuapp.com
      </Warning>
      <Note>
        <MdLightbulb style={{ marginRight: "0.5rem" }} />
        Use this link do make requests.
      </Note>
      <Hightlight>EndPoints</Hightlight>
      <Endpoints>
        {endpoints.map((endpoint, key) => {
          return <Endpoint {...endpoint} key={key} />;
        })}
      </Endpoints>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const Subtitle = styled(Title)`
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;

const Hightlight = styled(Title)`
  margin-top: 1rem;
  font-size: 1.1rem;
`;

const Warning = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #141414;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  margin-top: 0.5rem;
  color: white;

  @media only screen and (max-width: 766px) {
    padding: 0.5rem;
  }
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-indent: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  text-align: justify;
  margin-top: 0.5rem;
`;

const Note = styled(Text)`
  text-indent: 0;
  padding: 1rem;
  margin-top: 0.5rem;
  background-color: #40565e;
  color: white;
  font-style: italic;
  border-radius: 5px;

  @media only screen and (max-width: 766px) {
    padding: 0.5rem;
  }
`;

const Endpoints = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 0.5rem 0;
`;
