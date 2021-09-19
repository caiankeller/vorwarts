import { Link, useRouteMatch } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
`

const ContainerTitle = styled.span`
    color: black;
`

const Book = ({book}) => {
    let match = useRouteMatch();    
console.log(match)
    
  return <Container>
      <ContainerTitle>
        <Link to={`/book/${book.name}`}>{book.name}</Link>
      </ContainerTitle>
  </Container>;
};

export default Book