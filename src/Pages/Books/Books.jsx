// import React, { Suspense, use, useEffect, useState } from 'react';
// import Book from '../../Components/Book/Book';
// import Book from '../../Components/Book/Book';
import { Suspense } from 'react';
import Book from '../../Components/Book/Book';
// import Book from '../../Components/Book/Book';

const Books = ({ data }) => {
    console.log(data);

    // const [myBooks, setMyBooks] = useState([]);
    // useEffect(() => {
    //     fetch('books.json')
    //         .then((res) => res.json())
    //         .then((data) => console.log(data));
    // }, [])
    // const booksData = fetch('./books.json').then((res) => res.json());
    // console.log(booksData);
    return (
        <div>
            <h1>This is Books</h1>
            <div className='grid grid-cols-3'>
                <Suspense fallback={<span>Loading...</span>}>
                    {
                        data.map((singleBook) => <Book singleBook={singleBook}></Book>)
                    }
                </Suspense>
            </div>

        </div>
    );
};

export default Books;