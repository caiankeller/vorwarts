import { useState } from "react";

import styled from "styled-components";
import axios from "axios";

import { AiFillApi } from "react-icons/ai";
import { MdClose } from "react-icons/md";

export default function Documentation() {
  const [exemple, setExemple] = useState("^//make and request :D");

  const code = `axios.get("https://vorwartsapi.herokuapp.com/books", {
    params: {
      author: "Johann Wolfgang von Goethe",
      groupby: "author"
    }
  })`;

  function gettingBooks() {
    axios
      .get("https://vorwartsapi.herokuapp.com/books", {
        params: {
          author: "Johann Wolfgang von Goethe",
          groupby: "author",
        },
      })
      .then((results) => {
        setExemple(results.data.data);
      });
  }

  return (
    <Container>
      <Title> Documentation</Title>
      <Warning>
        Vorwärts is entirely open-source. Don't mind use it in anyway.
      </Warning>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at eros
        at elit mollis laoreet et at risus. Sed nec erat ut orci auctor
        fringilla. Suspendisse potenti. Curabitur accumsan elit eu augue
        malesuada euismod. Suspendisse elit lectus, consectetur ut est
        ullamcorper, tempus sodales nunc.
      </Text>
      <Subtitle>Getting Started</Subtitle>
      <Warning>
        <AiFillApi style={{ marginRight: "1rem" }} />
        https://vorwartsapi.herokuapp.com
      </Warning>
      <Note>Use this link do make requests.</Note>
      <Hightlight>Authentication</Hightlight>
      <Text>
        <MdClose />
        There's no Authentication needed or token.
      </Text>
      <Hightlight>EndPoints</Hightlight>
      <Endpoints>
        <Endpoint>
          /books
          <Append>
            <Line>
              <Tag>GET | Get books data.</Tag>
            </Line>
            <Text>All requests are sorted by author ascending.</Text>
            <Hightlight>Parameters</Hightlight>
            <Parameters>
              <Parameter>
                <Tag>Title</Tag>
              </Parameter>
              <Parameter>
                <Tag>Author</Tag>
              </Parameter>
              <Parameter>
                <Tag>Year | Year of publication. Ex.: "year": "1984".</Tag>
              </Parameter>
              <Parameter>
                <Tag>
                  Country | Stands for the country where the book was originally
                  published.
                </Tag>
              </Parameter>
              <Parameter>
                <Tag>
                  language | Language originally written, the download options
                  will usually be in the same language.
                </Tag>
              </Parameter>
              <Parameter>
                <Tag>
                  Genres | A slightly different field. To pass more than one
                  gender, divide it into commas. Ex.: "genres": "Fantasy,
                  Children's Book".
                </Tag>
              </Parameter>
              <Parameter>
                <Tag>
                  Limit | Stands for limit of books per request. The default
                  limit is 10.
                </Tag>
              </Parameter>
              <Parameter>
                <Tag>
                  Groupby | roup books by field. Try: author, genres, year,
                  country or language. Ex.: "groupby": "author".
                </Tag>
              </Parameter>
              <Parameter>
                <Tag>Offset | Skip the first books.</Tag>
              </Parameter>
            </Parameters>
            <Hightlight>Basically...</Hightlight>
            <Code>{code}</Code>
            <Button onClick={gettingBooks}>Test Code</Button>
            <Code>{JSON.stringify(exemple, null, 2)}</Code>
          </Append>
        </Endpoint>
      </Endpoints>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #141414;
`;

const Subtitle = styled(Title)`
  margin-top: 1rem;
  font-size: 1.3rem;
`;

const Hightlight = styled(Title)`
  margin-top: 1rem;
  font-size: 1.1rem;
`;

const Warning = styled.p`
  display: flex;
  align-itens: center;
  background-color: #8e71ed;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  text-align: justify;
  margin-top: 0.5rem;
  color: #141414;
`;

const Text = styled.p`
  display: flex;
  align-itens: center;
  font-size: 1rem;
  text-indent: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  text-align: justify;
  margin-top: 0.5rem;
  color: #141414;
`;

const Note = styled(Text)`
  text-indent: none;
  margin-top: 0.2rem;
  padding: 0.3rem;
  background-color: #ede47b;
  font-style: italic;
  border-radius: 5px;
`;

const Code = styled.pre`
  font-family: "IBM Plex Mono", monospace;
  background: linear-gradient(110deg, #8e71ed, #6b41f2);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  text-align: justify;
  margin-top: 1rem;
  color: #141414;
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
`;

const Endpoints = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 0.5rem 0;
`;

const Endpoint = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: 900;
`;

const Tag = styled.div`
  background-color: #b8ff01;
  margin-right: 1rem;
  padding: 0.4rem;
  border-radius: 7px;
`;

const Line = styled.div`
  display: flex;
  jusity-content: space-between;
  width: 100%;
`;

const Parameters = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 0.5rem 0;
`;

const Parameter = styled.li`
  margin-top: 0.5rem;
`;

const Append = styled.div`
  padding: 1rem 0;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: #7c5ce6};
  font-weight: 900;
  color: #fff;
  font-family: Inconsolata;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 5px;
`;
