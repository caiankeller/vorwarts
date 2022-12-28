import axios from "axios";
import { useState } from "react";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { setUser } from "./features/userSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ status: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    setIsLoading(true);

    axios
      .get("https://vorwarts-api.vercel.app/login", {
        params: {
          username: username,
          password: password,
        },
      })
      .then((re) => {
        dispatch(
          setUser({
            username: re.data.username,
            token: re.data.token,
            email: re.data.email,
          })
        );
        navigate("/dashboard");
      })
      .catch((er) => {
        setStatus({ status: true, message: er.response.data.message });
        setIsLoading(false);
      });
  }

  return (
    <Container>
      <Subtitle>Login</Subtitle>
      <Form>
        <Input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button disabled={isLoading} type="submit" onClick={(e) => login(e)}>
          Login
          {isLoading && <Loading>{<AiOutlineLoading3Quarters />}</Loading>}
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  font-size: 0.8rem;
  margin-left: 0.5rem;
  animation: ${rotate} 0.8s linear infinite;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.h2`
  margin-top: 0.5rem;
  font-size: 1.2rem;
`;

const Form = styled.form`
  margin-top: 0.5rem;
`;

const Input = styled.input`
  border-radius: 7px;
  padding: 0.5rem;
  font-family: Inconsolata;
  outline: none;
  width: 100%;
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }
`;

const Button = styled.button`
  display: flex;
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
  margin-top: 1rem;

  @media only screen and (max-width: 766px) {
    padding: 0.5rem;
  }
`;
