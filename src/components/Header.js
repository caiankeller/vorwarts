import styled from "styled-components";
import { Title, Button } from "./styles";

import { IoLibrary, IoDocumentText } from "react-icons/io5";

export default function Header({ propsActivePage, activePage }) {
  return (
    <Container>
      <Title>
        <div>
          <img src="/image.png" alt="" height="32px" width="32px" />
          Vorwärts
        </div>
      </Title>
      <Buttons>
        <Button
          noFill={activePage === "documentation" ? false : true}
          style={{ margin: "0" }}
          onClick={() => {
            propsActivePage("documentation");
          }}
        >
          Documentation
          <IoDocumentText />
        </Button>
        <Button
          noFill={activePage === "library" ? false : true}
          onClick={() => {
            propsActivePage("library");
          }}
        >
          Library <IoLibrary />
        </Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 1rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Buttons = styled.div`
  display: flex;

  @media only screen and (max-width: 766px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  * {
    margin-left: 1rem;
  }
`;
