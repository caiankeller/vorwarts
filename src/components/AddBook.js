import axios from "axios";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { AiFillCloseCircle, AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";
import styled, { keyframes } from "styled-components";
import Input from "./form/Input";
import countries from "./helper/countries";
import languages from "./helper/languages";

export default function AddBook({ token, isOpen }) {
  const [country, setCountry] = useState("Afghanistan");
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [status, setStatus] = useState({ status: "", message: "" });
  const [values, setValues] = useState({});
  const [isLoading, setIsloading] = useState(false);

  function handleValues(e, target) {
    setValues((values) => ({
      ...values,
      [target]: e,
    }));
  }

  function postBook(e) {
    e.preventDefault();
    setIsloading(true);

    axios
      .post(
        "https://vorwarts-api.vercel.app/book",
        {
          ...values,
          country,
          countryCode:
            countries[countries.findIndex((c) => c.name === country)][
              "alpha-2"
            ],
          language,
          genres,
        },
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then(() => {
        setStatus({ status: "success", message: "Successfully registered" });
        setCountry("Afghanistan");
        setGenre("");
        setGenres([]);
        setLanguage("");
        setValues({});
        setIsloading(false);
      })
      .catch((err) => {
        setStatus({ status: "error", message: err.response.data.message });
        setIsloading(false);
      });
  }

  return (
    <Container isOpen={isOpen}>
      <Subtitle>Add Book</Subtitle>
      <Form>
        <Input
          type="text"
          name="title"
          minimumLength="4"
          handlingValues={(e, target) => handleValues(e, target)}
        />
        <Input
          type="text"
          name="author"
          minimumLength="4"
          handlingValues={(e, target) => handleValues(e, target)}
        />
        <Genres>
          <Genre>Genres:</Genre>
          {genres.map((genre, key) => (
            <Genre key={key}>
              {genre}
              <AiFillCloseCircle
                style={{ margin: "0 0.5rem" }}
                //this was actually a bug, it was not working
                onClick={() => setGenres(genres.filter((g) => g !== genre))}
              />
              ·
            </Genre>
          ))}
        </Genres>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddGenre
            type="text"
            placeholder="Genre"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
            style={{ marginTop: "1rem" }}
          />
          <Button
            style={{ marginLeft: "0.5rem" }}
            onClick={(e) => {
              e.preventDefault();
              if (!genres.includes(genre) && genre.length > 0) {
                setGenres([...genres, genre]);
              }
              setGenre("");
            }}
          >
            Add
          </Button>
        </div>
        <Input
          type="number"
          name="year"
          handlingValues={(e, target) => handleValues(e, target)}
        />

        <ReactCountryFlag
          countryCode={
            countries[countries.findIndex((c) => c.name === country)]["alpha-2"]
          }
          aria-label={country}
          style={{ marginTop: "1rem" }}
        />
        <Select
          name="countries"
          defaultValue={country.name}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          {countries.map((country, key) => (
            <option key={key}>{country.name}</option>
          ))}
        </Select>

        <Select
          name="countries"
          defaultValue={language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          {languages.map((language, key) => (
            <option key={key}>{language.name}</option>
          ))}
        </Select>

        <Button
          onClick={(e) => {
            postBook(e);
          }}
        >
          Add book
          {isLoading && (
            <Loading>
              <AiOutlineLoading3Quarters style={{ margin: 0 }} />
            </Loading>
          )}
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
  position: ${(props) => (props.isOpen ? "" : "absolute")};
  top: ${(props) => (props.isOpen ? "" : "-100%")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  width: 100%;
  background-color: #141414;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 1rem;
  color: white;
  transition: all 0.3s ease-in-out;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  margin-left: 0.5rem;
  font-size: 0.8rem;
  animation: ${rotate} 0.8s linear infinite;
`;

const Form = styled.form`
  margin-top: 0.5rem;
`;

const Subtitle = styled.h2`
  margin-top: 0rem;
  font-size: 1.2rem;
`;

const Button = styled.button`
  display: flex;
  padding: 0.5rem;
  border: none;
  background-color: white;
  margin-top: 1rem;
  font-weight: 900;
  color: #141414;
  font-family: Inconsolata;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
`;

const Genres = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 1rem;
  border-radius: 7px;
  margin-top: 1rem;
  background-color: #fff;
`;

const Genre = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #141414;
  font-family: "Bebas Neue", cursive;
  border-radius: 5px;
  font-size: 1rem;
  margin-right: 0.5rem;
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

const Select = styled.select`
  border-radius: 7px;
  padding: 0.5rem;
  font-family: Inconsolata;
  outline: none;
  width: 100%;
  margin-top: 1rem;
`;

const AddGenre = styled.input`
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
