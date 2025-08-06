import React from 'react';
import { FaStar } from "react-icons/fa6";
const Book = ({ singleBook }) => {
    console.log(singleBook);
    // console.log(singleBook.images);
    const { bookName, author, image, category, rating } = singleBook;
    return (
        <div className="  card bg-base-100 w-96 shadow-sm">
            <figure className='bg-gray-100'>
                <img className='w-[320px] h-[280px]'
                    src={image}
                    alt="Shoes" />
            </figure>
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
        </div>
    );
};

export default Book;