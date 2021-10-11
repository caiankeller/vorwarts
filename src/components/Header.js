import styled from "styled-components";
import { VscGithubInverted, VscMenu, VscChromeClose } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {

  const [url, setUrl] = useState('')
  const [toggleOn, setToggleOn] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  let getUrl = useLocation()

  useEffect(() => {
    setUrl(getUrl)
  }, [getUrl])

  const toggling = () => {
    setToggleOn(!toggleOn);
  };

  const getSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
    windowSize > "1000" ? setToggleOn(false) : console.log("i love my mom");
  }, [windowSize]);

  return (
    <Container>
      <Title onClick={() => url.pathname === '/' ? console.log("BLOCKED") : (window.location.href = '/')}>Vorwärts</Title>
      <Toggle onClick={toggling}>
        {!toggleOn ? <VscMenu /> : <VscChromeClose />}
      </Toggle>
      <Buttons active={toggleOn}>
        <button onClick={() => window.location.href="https://github.com/vonweinkeller/vorwarts"}>
          GitHub<VscGithubInverted color="#fff38e"></VscGithubInverted>
        </button>
        <button onClick={() => url.pathname === '/about' ? console.log("BLOCKED") : (window.location.href = '/about')}>Acknowledgment</button>
        <button>Contact</button>
        <button onClick={() => url.pathname === '/about' ? console.log("BLOCKED") : (window.location.href = '/about')}>What's Vorwärts</button>
      </Buttons>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  background-color: #e23c52;
  box-shadow: 0 0 20px #e23c52a1;
  font-size: 2.5rem;
  padding: 2rem;
  border-radius: 0.5rem;

  * {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  @media (max-width: 513px) {
    font-size: 2rem;
    padding: 1rem;

    img {
      width: 100px;
      height: 100px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
    }
  }
`;

const Title = styled.span`
  font-size: 2.5rem;
  color: rgb(10, 10, 10);
  font-weight: bolder;
  color: #242424;
  font-family: "Bebas Neue", cursive;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  z-index: 2;
  top: 6rem;
  right: 2rem;
  position: ${(props) => (props.active ? "absolute" : "")};
  flex-direction: ${(props) => (props.active ? "column" : "")};
  background: ${(props) => (props.active ? "#fff38e" : "")};
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  button {
    z-index: 3;
    margin-top: ${(props) => (props.active ? "0.5rem" : "")};
    margin-bottom: ${(props) => (props.active ? "0.5rem" : "")};
    width: ${(props) => (props.active ? "100%" : "")};
    padding: 0.6rem;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    border: none;
    background-color: #242424;
    color: white;
    font-weight: bolder;
    cursor: pointer;
  }

  @media (max-width: 999px) {
    display: ${(props) => (props.active ? "" : "none")};
  }
`;

const Toggle = styled.button`
  display: block;
  height: 3rem;
  padding: 0.6rem;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  border: none;
  background-color: #242424;
  color: white;
  font-weight: bolder;
  @media (min-width: 1000px) {
    display: none;
  }
`;