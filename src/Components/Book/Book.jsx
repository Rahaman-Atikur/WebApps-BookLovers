import React from 'react';
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';
const Book = ({ singleBook }) => {
    console.log(singleBook);
    // console.log(singleBook.images);
    const { bookName, author, image, category, rating, tags, publisher, bookId } = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}><div className="  card bg-base-100 w-96 shadow-sm shadow">
            <figure className='bg-gray-100'>
                <img className='w-[320px] h-[280px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className='flex gap-1 text-center justify-center font-extrabold mt-4'>
                {
                    tags.map((tag) => <p>{tag}</p>)
                }
            </div>
            <p className='font-extrabold justify-center text-center'> Books By: {publisher}</p>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <FaStar /></div>
                </div>
            </div>
        </div></Link>
    );
};
export default Book;