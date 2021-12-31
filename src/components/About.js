import styled from "styled-components";
import { Typography, Checkbox } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Body>
        <Typography variant="h3" component="div">
          What is vorwärts about
        </Typography>
        <Typography
          variant="body1"
          style={{
            textIndent: "1rem",
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          Vorwärts is designed to be a digital library focused on public domain
          books, maintained by users with the goal of saving the legacy of our
          history, totally free of ads.
        </Typography>

        <Goals>
          Vorwärts is not yet finished, but is constantly improvised, here are
          the goals of the project.
          <label>
            <Checkbox color="secondary" label="" checked disabled /> Offical
            Page
          </label>
          <label>
            <Checkbox
              color="secondary"
              label="official page"
              checked
              disabled
            />
            API (the basic usage)
          </label>
          <label>
            <Checkbox color="secondary" disabled />
            Contribute Platform
          </label>
          <label>
            <Checkbox color="secondary" disabled />
            Official Library
          </label>
          <label>
            <Checkbox color="secondary" disabled />
            Well populated API
          </label>
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
  border-radius: 10px;
  backdrop-filter: blur(14px);
  background-color: #ffffff33;
  width: 100%;
  margin-top: 1rem;
`;

const Body = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #402be2;
  padding: 1rem;
`;
