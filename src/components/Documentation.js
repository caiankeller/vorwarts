import styled from "styled-components";
import { Typography, Checkbox } from "@mui/material";
import List from "./List";

export default function Documentation() {
  const queries = [
    {
      title: "title",
      description: "string",
    },
    {
      title: "author",
      description: "string",
    },
    {
      title: "year",
      description: "number //origin year publishmment ex.: '1984'",
    },
    {
      title: "country",
      description: "string //stands for country of origin from book",
    },
    {
      title: "language",
      description: "string //language originally written",
    },
    {
      title: "genres(not supported yet)",
      description: "array //ex.: ['adventure', 'childrens book']",
    },
    {
      title: "limit",
      description: "number //stands for limit of books per request",
    },
    {
      title: "offset",
      description: "number //skip the firsts books",
    },
    {
      title: "groupby",
      description:
        "string //agroup books by a field, like author, genres, year, country or language",
    },
  ];

  return (
    <Container>
      <Body>
        <Typography variant="h3" component="div">
          How to use it
        </Typography>
        <div style={{ marginBottom: "1rem" }}>
          <Typography
            variant="body1"
            gutterBottom
            style={{ textIndent: "1rem" }}
          >
            Keeping it simple...(for now)
          </Typography>
          <Icon>
            <Typography style={{ wordBreak: "break-word" }} variant="title">
              GET | https://vorwartsapi.herokuapp.com/books
            </Typography>
          </Icon>
          <Typography
            variant="body1"
            gutterBottom
            style={{
              textIndent: "1rem",
              textAlign: "justify",
              marginTop: "1rem",
            }}
          >
            At the moment, most fields support only one option. Only the genres
            support multiple information. But body is optional, without body,
            the the request will be responsed with the first 10 books found.{" "}
            <b>These are the able fields for the moment:</b>
          </Typography>
        </div>

        <List title="Queries" data={queries} />

        <div style={{ marginTop: "1rem" }}>
          <Typography
            variant="body1"
            gutterBottom
            style={{
              textIndent: "1rem",
              textAlign: "justify",
              marginTop: "1rem",
            }}
          >
            Downloading books are very limited yet. And these are some of the
            goals of the project that will be made with the time:
          </Typography>
        </div>
        <Goals>
          <div>
            <Checkbox color="secondary" label="" checked disabled />
            /books
          </div>
          <div>
            <Checkbox color="secondary" label="" disabled />
            /genres, /languages /countr...
          </div>
          <div>
            <Checkbox color="secondary" label="" disabled />
            Download Option
          </div>
          <div>
            <Checkbox color="secondary" label="" disabled />
            User-friendly platform for contribuition
          </div>
          <div>
            <Checkbox color="secondary" label="" disabled />
            Raw download
          </div>
        </Goals>
      </Body>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #402be2;
`;

const Goals = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  backdrop-filter: blur(14px);
  background-color: #ffffff33;
  margin-top: 1rem;
`;

const Body = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem;
`;

const Icon = styled.div`
  font-weight: bold;
  padding: 0.1rem 0.5rem;
  background-color: #8aff8a;
  border-radius: 5px;
`;
