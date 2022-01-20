import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  font-weight: bolder;
  font-style: italic;
  color: #141414;
  text-transform: capitalize;
  margin-top: 1rem;
`;

export const Subtitle = styled.h2`
  display: flex;
  width: 100%;
  text-transform: capitalize;
  font-size: 1.1rem;
  justify-content: space-between;
  text-decoration: underline;
  font-style: italic;
  align-items: center;
  width: 100%;
  margin-top: 0.5rem;
`;

export const Text = styled.p`
  width: 100%;
  font-family: "Roboto", sans-serif;
  text-indent: 1rem;
  font-size: 1rem;
  width: 100%;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-size: 1rem;
  color: white;
  font-weight: bolder;

  padding: 0.3rem 1rem;

  transition: all 250ms;

  background-color: ${(props) => (props.noFill ? "white" : "#141414")};
  border: ${(props) => (props.noFill ? "1px solid #141414" : "none")};
  color: ${(props) => (props.noFill ? "#141414" : "white")};
  border-radius: 2px;

  &::last-child {
    margin-left: 1rem;
  }
`;
