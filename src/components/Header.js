import styled from "styled-components";
import { motion } from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";

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
    img {
      width: 100px;
      height: 100px;
    }

    div {
      padding: 1.5rem;
    }
  }
`;

const Title = styled.span`
  font-size: 2.5rem;
  color: rgb(10, 10, 10);
  font-weight: bolder;
  color: #242424;
  font-family: 'Bebas Neue', cursive;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 10px;

  button {
    padding: 0.6rem;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    border: none;
    background-color: #242424;
    color: white;
    font-weight: bolder;
  }

  @media(max-width: 1000px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Container as={motion.div} initial="hidden" animate="visible">
      <Title>Vorwärts</Title>
      <Buttons>
        <button>GitHub<VscGithubInverted color='#fff38e'></VscGithubInverted></button>
        <button>Acknowledgment</button>
        <button>Contact</button>
        <button>What's Vorwärts</button>
      </Buttons>
    </Container>
  );
};

export default Header;
