import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Book = () => {
    const {book} = useParams()
    const [bookname, setBook] = useState(book)

    return(
        <h1>
            {bookname}
        </h1>
    )


}

export default Book