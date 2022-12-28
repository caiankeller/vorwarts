import { AiFillApi } from "react-icons/ai";
import { MdLightbulb } from "react-icons/md";
import styled from "styled-components";
import Endpoint from "./Endpoint";
import axios from "axios";

export default function Documentation() {
  const publicEndpoints = [
    {
      name: "/books",
      description: "GET | Get books data.",
      parameters: [
        "Title",
        "Author",
        'Year | Year of publication. E.g.: "year": "1984".',
        "Country | Stands for the country where the book was originally published.",
        "language | Language originally written, the download options will usually be in the same language.",
        "Genres | A slightly different field. To pass more than one gender, divide it into commas. E.g.: 'genres': 'Fantasy, Children's Book'.",
        "Limit | Stands for limit of books per request. The default limitis 10.",
        "Groupby | roup books by field. Try: author, genres, year, country or language. E.g.: 'groupby': 'author'.",
        "Offset | Skip the first books.",
      ],
      code: `axios.get("https://vorwarts-api.vercel.app/books", {
        params: {
          author: "Johann Wolfgang von Goethe",
          groupby: "author"
        }
      })`,
      async request() {
        return await axios
          .get("https://vorwarts-api.vercel.app/books", {
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
      code: `axios.get("https://vorwarts-api.vercel.app/genres")`,
      async request() {
        return await axios
          .get("https://vorwarts-api.vercel.app/genres")
          .then((re) => {
            return re.data.data;
          });
      },
    },
    {
      name: "/countries",
      description: "GET | Get all countries.",
      parameters: [],
      code: `axios.get("https://vorwarts-api.vercel.app/countries")`,
      async request() {
        return await axios
          .get("https://vorwarts-api.vercel.app/countries")
          .then((re) => {
            return re.data.data;
          });
      },
    },
  ];

  const privateEndpoints = [
    {
      name: "/signup",
      description: "POST | Create a new user.",
      parameters: ["username", "email", "password"],
      code: `axios.post("https://vorwarts-api.vercel.app/signup", {
        username: "Johann Wolfgang von Goethe",
        email: "goethe@gmail.com",
        password: "hyper secure password"
      })`,
      response: `{ "status": 201, "ok": true }`,
    },
    {
      name: "/login",
      description: "GET | Authenticate an user.",
      parameters: ["username", "password"],
      code: `axios.get("https://vorwarts-api.vercel.app/login", {
        params: {
          username: "Johann Wolfgang von Goethe",
          password: "hyper secure password"
        }
      })`,
      response: `{
        "status": 200,
        "ok": true,
        "message": "user authenticated",
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjUxZGVhZTI3NDZkNTc4ZDVjZDkyNDIiLCJpYXQiOjE2NDk1MzM1MjEsImV4cCI6MTY0OTYxOTkyMX0.LnT2VN9xYRzQGOWKc1RglIgScRI5_mYaEX6eIV_wwWg",
        "username": "Johann Wolfgang von Goethe",
        "email": "goethe@gmail.com"
      }`,
    },
    {
      name: "/book",
      description: "POST | Publish a book in the database.",
      parameters: [
        "token | Pass the current through the headers as 'authorization'",
        "title",
        "author",
        "year",
        "country | Tends to write in English.",
        "countryCode | In Alpha 2. E.g.: US for United States or GB for United Kingdom.",
        "Language | Tends to write in English, the standart is available",
        "genres | Array, E.g: ['Fantasy', 'Children's Book']",
      ],
      code: `axios.get("https://vorwarts-api.vercel.app/login", {
        title: "The Sorrows of Young Werther",
        author: "Johann Wolfgang von Goethe",
        year: "1774",
        country: "Germany",
        countryCode: "DE",
        language: "German",
        "genres": [
          "Epistolary novel"
        ]},
        headers: {
          authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjUxZGVhZTI3NDZkNTc4ZDVjZDkyNDIiLCJpYXQiOjE2NDk1MzM1MjEsImV4cCI6MTY0OTYxOTkyMX0.LnT2VN9xYRzQGOWKc1RglIgScRI5_mYaEX6eIV_wwWg"
        }
        )`,
      response: `{
        "status": 201,
        "ok": true,
        "message": "Book created successfully.",
      }`,
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
        https://vorwarts-api.vercel.app
      </Warning>
      <Note>
        <MdLightbulb style={{ marginRight: "0.5rem" }} />
        Use this link do make requests.
      </Note>
      <Hightlight>Public endpoints</Hightlight>
      <Endpoints>
        {publicEndpoints.map((endpoint, key) => {
          return <Endpoint {...endpoint} key={key} />;
        })}
      </Endpoints>
      <Hightlight>Institucional endpoints</Hightlight>
      <Endpoints>
        {privateEndpoints.map((endpoint, key) => {
          return <Endpoint {...endpoint} key={key} />;
        })}
      </Endpoints>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const Subtitle = styled.h2`
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
