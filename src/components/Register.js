import axios from "axios";
import { useEffect, useState } from "react";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";
import styled from "styled-components";
import Input from "./form/Input";

export default function Register() {
  const [values, setValues] = useState({});
  const [status, setStatus] = useState({ status: "", message: "" });

  useEffect(() => {
    setStatus({ status: "", message: "" });
  }, [values]);

  function register(e) {
    e.preventDefault();

    axios
      .post("https://vorwartsapi.herokuapp.com/signup", {
        username: values.username,
        password: values.password,
        email: values.email,
      })
      .then(() => {
        setStatus({ status: "success", message: "Successfully registered" });
      })
      .catch((err) => {
        setStatus({ status: "error", message: err.response.data.message });
      });
  }

  function handleValues(e, target) {
    setValues((values) => ({
      ...values,
      [target]: e,
    }));
  }

  return (
    <Container>
      <Subtitle>Register</Subtitle>
      <Form>
        <Input
          type="text"
          name="username"
          minimumLength="4"
          handlingValues={(e, target) => handleValues(e, target)}
        />
        <Input
          type="text"
          name="email"
          minimumLength="7"
          handlingValues={(e, target) => handleValues(e, target)}
        />
        <Input
          type="password"
          name="password"
          minimumLength="8"
          handlingValues={(e, target) => handleValues(e, target)}
        />
        {typeof values.password !== "undefined" &&
          values.password.length > 0 &&
          values.password.length < 8 && <Error>Password too short.</Error>}
        <Input
          type="password"
          name="confirmPassword"
          handlingValues={(e, target) => handleValues(e, target)}
        />
        {typeof values.password !== "undefined" &&
          typeof values.confirmPassword !== "undefined" &&
          values.password !== values.confirmPassword && (
            <Error>Password doesn't match</Error>
          )}
        <Button type="submit" onClick={(e) => register(e)}>
          Register
        </Button>
      </Form>
      {status.status !== "" &&
        (status.status === "success" ? (
          <Warning status={status.status}>
            <FiCheck style={{ marginRight: "0.5rem" }} />
            {status.message}
          </Warning>
        ) : (
          <Warning status={status.status}>
            <FiAlertTriangle style={{ marginRight: "0.5rem" }} />
            {status.message}
          </Warning>
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const Subtitle = styled(Title)`
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 1.2rem;
`;

const Form = styled.form`
  margin-top: 0.5rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: #141414;
  font-weight: 900;
  color: white;
  font-family: Inconsolata;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
  float: right;
`;

const Warning = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) =>
    props.status === "success" ? "#228c22" : "#df4759"};
  border: #141414;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem;
  margin-top: 1rem;
  color: black;
  width: 100%;

  @media only screen and (max-width: 766px) {
    padding: 0.5rem;
  }
`;

const Error = styled(Warning)`
  padding: 0.5rem;
  font-size: 0.8rem;
  margin: 0.5rem 0;
`;
