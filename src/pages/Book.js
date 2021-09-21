import { useParams } from "react-router-dom";

const Book = () => {
  const { book } = useParams();

  return (
    <h1>
      {book}

    </h1>
  );
};

export default Book;
