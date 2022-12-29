import styled from "styled-components";
import { useState } from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

export default function Endpoint({
  name,
  description,
  parameters,
  code,
  request,
  response,
}) {
  const [exemple, setExemple] = useState("//make and request :D");
  const [got, setGot] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Highlight>
        {isOpen ? (
          <AiFillCaretDown onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <AiFillCaretRight onClick={() => setIsOpen(!isOpen)} />
        )}
        {name}
      </Highlight>
      <Append isOpen={isOpen}>
        <Line>
          <Tag>{description}</Tag>
        </Line>
        <Highlight>Parameters</Highlight>
        <Parameters>
          {parameters.map((parameter, key) => {
            return (
              <Parameter key={key}>
                <Tag>{parameter}</Tag>
              </Parameter>
            );
          })}
          {parameters.length === 0 && <Text style={{ color: "#ED958B" }}>No parameters available.</Text>}
        </Parameters>
        <Highlight>Basically...</Highlight>
        <Code>{code}</Code>
        {typeof request !== "undefined" ? (
          <>
            <Button
              disabled={got}
              onClick={async () => {
                setExemple("fetching...");
                const response = await request();
                setExemple(response);
                setGot(true);
              }}
            >
              Try it <MdLightbulbOutline style={{ marginLeft: "1rem" }} />
            </Button>
            <Code>{JSON.stringify(exemple, null, 2)}</Code>
          </>
        ) : (
          <Code>{response}</Code>
        )}
      </Append>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: 900;
`;

const Title = styled.h1`
  margin-top: 1rem;
  color: #ED958B;
  font-size: 1.5rem;
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
  display: ${(props) => (props.isOpen ? "block" : "none")};
  margin-top: 1rem;
`;

const Tag = styled.div`
  background-color: #8CE3ED;
  color: #141414;
  padding: 0.5rem;
  border-radius: 7px;
  font-weight: 500;
`;

const Line = styled.div`
  display: flex;
  width: 100%;
`;

const Code = styled.pre`
  font-family: "IBM Plex Mono", monospace;
  background-color: #8CE3ED;
  color: #141414;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem;
  margin-top: 1rem;
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: ${(props) => (props.disabled ? "#ED958Ba1" : "#ED958B")};
  color: #141414;
  font-family: "IBM Plex Mono";
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
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

const Highlight = styled(Title)`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.1rem;
`;
