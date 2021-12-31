import styled from "styled-components";

import {
  List as ListMUI,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function List({ title, data }) {
  return (
    <Container>
      <Typography variant="title"> {title}</Typography>
      <ListMUI>
        {Object.keys(data).map((query, key) => {
          return (
            <ListItem key={key}>
              <ListItemText
                primary={data[query].title}
                secondary={data[query].description}
              />
            </ListItem>
          );
        })}
      </ListMUI>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
