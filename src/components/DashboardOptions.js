import axios from "axios";
import { useState } from "react";
import {
  AiFillCloseCircle,
  AiFillCopy,
  AiFillPlusCircle,
} from "react-icons/ai";
import ScrollContainer from "react-indiana-drag-scroll";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { unsetUser } from "./features/userSlice";
import { useAuth } from "./hooks/useAuth";

export default function DashboardOptions() {
  const user = useAuth().user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  function createToken() {
    axios
      .get("https://vorwarts-api.vercel.app/token", {
        headers: { authorization: user.token },
      })
      .then((result) => {
        setToken(result.data.token);
      });
  }

  return (
    <>
      <Container>
        <Option onClick={() => createToken()}>
          <AiFillPlusCircle size="20" />
          Create Token
        </Option>
        <Option
          style={{ backgroundColor: "#df4759" }}
          onClick={() => {
            dispatch(unsetUser());
            navigate("/");
          }}
        >
          <AiFillCloseCircle size="20" />
          Logout
        </Option>
      </Container>
      {token !== "" && (
        <div>
          <Token>
            {token}
            <div>
              <AiFillCopy
                size="20"
                style={{ marginLeft: "0.5rem" }}
                onClick={() => {
                  navigator.clipboard.writeText(token);
                }}
              />
            </div>
            <div>
              <AiFillCloseCircle
                size="20"
                style={{ marginLeft: "0.5rem" }}
                onClick={() => {
                  setToken("");
                }}
              />
            </div>
          </Token>
          You won't be able to access this token again.
        </div>
      )}
    </>
  );
}

const Container = styled(ScrollContainer)`
  display: flex;
  width: 100%;
  overflow: scroll;
  grid-gap: 1rem;
  border-radius: 5px;
  cursor: grab;
  margin-top: 0.2rem;

  @media only screen and (max-width: 540px) {
    grid-gap: 0.5rem;
  }

  &:active {
    cursor: grabbing;
  }
`;

const Option = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
  border-radius: 5px;
  font-weight: 900;
  background-color: #ED958B;
  color: #141414;
  min-height: 200px;
  height: auto;
  width: 200px;
  position: relative;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    transform: scale(0.98, 0.98);
  }
`;

const Token = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "IBM Plex Sans", sans-serif;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 7px;
  background-color: #141414;
  color: white;
  font-size: 0.7rem;
  word-break: break-all;
`;
