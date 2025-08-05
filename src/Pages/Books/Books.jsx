import React, { use, useEffect, useState } from 'react';

const Books = () => {
    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("books.json")
    //         .then((res) => res.json())
    //         .then((data) => console.log(data));

    // }, [])

    const [myBooks, setMyBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [])
    return (
        <div>
            <h1>This is Books</h1>

        </div>
    );
};

export default Books;