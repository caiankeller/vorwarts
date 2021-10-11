import React from "react";
import styled from "styled-components";
import { VscHeart } from "react-icons/vsc";

const About = () => {
  return (
    <Container>
      <div className="card">
        <span className="card-title">About</span>
        <span className="title">Why vorwärts was created</span>
        <span className="about">
          Vorwärts was created to easily provide public domain books and build a
          distinctive library total ad-free. I always wanted to make people more
          interested in books. So using classic books in the public domain to
          create beautiful minimalist editions is an accomplishment for me.
        </span>
        <br />

        <span className="about">
          Vorwärts is writted on
          <a href="https://reactjs.org/"> React, from Facebook</a>, deployed in
          <a href="https://id.heroku.com/login"> Heroku</a> with a free-account
          and hosts the books on
          <a href="https://github.com/"> GitHub, from Microsoft</a>.
        </span>

        <span className="madeWith">
          Made with <VscHeart color="red"></VscHeart>
        </span>

        <span className="lastDisclaimer">
          This project isn't free of erros (i'm very inexperienced by the way),
          the full project code is available
          <a href="https://github.com/vonweinkeller/vorwarts"> here</a>
        </span>
      </div>

      <div className="card">
        <span className="card-title">Acknowledgment</span>
        <span className="title"></span>
        <span className="about">
          I have no words to explain how grateful I am for Project Gutenberg, a
          sine qua non condition for Vorwärts. When scoping Vorwärts, I found
          out that it is really hard and that the work of Project Gutenberg is
          essential.
        </span>
        <span className="about">
          I really have not the money to spend in servers to deploy the
          Vorwärts, it couldn't exist either if it weren't for Github and
          Heroku.
        </span>
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  background-color: white;
  background: linear-gradient(180deg, #e23c52, #e23c52a1);
  box-shadow: 0 0 20px #e23c52a1;
  border-radius: 10px;
  padding: 1rem;
  padding-bottom: 0;

  .card {
    display: flex;
    flex-direction: column;
    background-color: #242424;
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    color: white;
    margin-bottom: 1rem;
  }

  .card-title {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    height: 1.5rem;
    font-family: "Bebas Neue", cursive;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
  }

  .title {
    font-family: "Helvetica neue", "Roboto", sans-serif;
    font-weight: bolder;
    margin: 0.2rem;
  }

  .about {
    font-family: "Helvetica neue", "Roboto", sans-serif;
    text-indent: 1rem;
  }

  .lastDisclaimer {
    color: grey;

    a {
      color: grey;
      text-decoration: underline;
    }
  }

  a {
    font-weight: bolder;
    text-decoration: none;
    color: white;
    text-decoration: underline;
  }

  .madeWith {
    font-family: "Helvetica neue", "Roboto", sans-serif;
    font-weight: bolder;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: grey;
  }
`;
