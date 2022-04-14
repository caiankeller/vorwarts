import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Input({
  name,
  type,
  minimumLength,
  handlingValues,
  ...rest
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    handlingValues(value, name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Container
      {...rest}
      type={type}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      short={
        typeof minimumLength !== "undefined"
          ? value.length > 0
            ? value.length < minimumLength
              ? true
              : false
            : false
          : false
      }
      value={value}
      placeholder={name}
    />
  );
}

const Container = styled.input`
  border-radius: 7px;
  padding: 0.5rem;
  font-family: Inconsolata;
  outline: none;
  width: 100%;
  margin-top: 1rem;
  background-color: ${(props) => props.short && "#df4759"};

  &:first-child {
    margin-top: 0;
  }
`;
