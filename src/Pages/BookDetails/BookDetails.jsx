import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utilities/addToDB';
const BookDetails = () => {
    const { id } = useParams();
    const paramsId = parseInt(id);
    const data = useLoaderData();
    console.log(data);
    console.log(id);
    // const singleBook = data.find((book) => book.bookId === paramsId)
    const singleBook = data.find((book) => book.bookId === paramsId);
    console.log(singleBook);
    const { bookName, image } = singleBook;


    const handleMarkedAsRead =(id) => {
        addToStoredDB(id);
    }
   
    return (
        <div className='mt-10 w-2/3 mx-auto'>
            <h1 className='text-xl font-extrabold '>{bookName}</h1>
            <img className='w-48' src={image} alt="" />
            <button onClick={() => handleMarkedAsRead(id)} className='btn btn-info m-2'>Mark As Read</button>
            <button className='btn btn-accent m-2'>List</button>
        </div>
    );
};
export default BookDetails;