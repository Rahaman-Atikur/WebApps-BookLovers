import React from 'react';

const Book = ({ singleBook }) => {
    console.log(singleBook);
    // console.log(singleBook.images);
    const { bookName, author, image } = singleBook;
    return (
        <div className="  card bg-base-100 w-96 shadow-sm">
            <figure>
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
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;