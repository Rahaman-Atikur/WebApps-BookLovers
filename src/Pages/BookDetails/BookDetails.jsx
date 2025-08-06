import React from 'react';
import { useLoaderData, useParams } from 'react-router';
const BookDetails = () => {
    const { id } = useParams();
    const paramsId = parseInt(id);
    const data = useLoaderData();
    console.log(data);
    console.log(id);
    // const singleBook = data.find((book) => book.bookId === paramsId)
    const singleBook = data.find((book)=>book.bookId===paramsId);
    console.log(singleBook);
    const { bookName, image } = singleBook;
    return (
        <div className='mt-10'>
            <h1>{bookName}</h1>
            <img src={image} alt="" />
        </div>
    );
};
export default BookDetails;