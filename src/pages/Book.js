import styled from "styled-components";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  margin-top: 1rem;
  background-color: #e23c52;
  box-shadow: 0 0 20px #e23c52;
  border-radius: 10px;
  padding: 1rem;

  @media(max-width: 671px) {
    grid-template-columns: 1fr;
  }
`;

const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Cover = styled.img`
  box-shadow: 0 0 20px black;
  height: 100%;
  width: 100%;
`;

const RightPanel = styled.div`
  display: flex;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#242420, #242424);
  border-radius: 10px;
`;

const Back = styled.button`
  font-size: 1.3rem;
  border-radius: 5px;
  text-decoration: none;
  background-color: #fff38e;
  font-family: "Bebas Neue", cursive;
  box-shadow: 0 0 10px #fff38ea1;
  border: none;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #242424;
  margin-right: 2rem;
  font-weight: bold;
  padding: 0.3rem;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
`;

const Book = () => {
  const { book } = useParams();

  return (
    <>
    <Back
    as={motion.div}
    whileHover={{ scale: 1.020 }}
    onHoverStart={(e) => {}}
    onHoverEnd={(e) => {}}
    whileTap={{ scale: 0.970 }}
    onClick={() => (window.location.href = '/')}
  >
    <VscArrowSmallLeft />
    Back to books
  </Back>
    <Container>
      <LeftPanel>
        <Cover src="https://c.wallhere.com/photos/c0/4e/2480x3508_px_clouds_illustration_Portrait_Display_sky-1430377.jpg!d"></Cover>
      </LeftPanel>
      <RightPanel>{book}</RightPanel>
    </Container>
    </>
  );
};

export default Book;
