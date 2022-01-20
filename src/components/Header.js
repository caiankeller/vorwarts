import styled from "styled-components";
import { Title, Button } from "./styles";

import { IoLibrary, IoDocumentText } from "react-icons/io5";

export default function Header({ propsActivePage, activePage }) {
  return (
    <Container>
      <Title>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Vorwärts
          <img src="/image.png" alt="" height="32px" width="32px" />
        </div>
      </Title>
      <Buttons>
        <ButtonIcon
          noFill={activePage === "documentation" ? false : true}
          style={{ margin: "0" }}
          onClick={() => {
            propsActivePage("documentation");
          }}
        >
          Documentation
          <IoDocumentText />
        </ButtonIcon>
        <ButtonIcon
          noFill={activePage === "library" ? false : true}
          onClick={() => {
            propsActivePage("library");
          }}
        >
          Library
          <IoLibrary />
        </ButtonIcon>
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
    pad
  }

  > * {
    margin-left: 1rem;
  }
`;

const ButtonIcon = styled(Button)`
  &:last-child {
    margin-left: 0.5rem;
  }
`;
