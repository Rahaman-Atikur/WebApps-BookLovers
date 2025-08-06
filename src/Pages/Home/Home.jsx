import React from 'react';
import Banner from '../../Components/Banner/Banner';
// import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import Books from '../Books/Books';
// import Book from '../../Components/Book/Book';

const Home = () => {
    // const data = useLoaderData();
    // console.log(data);
    // const data = useLoaderData();
    // console.log(data);
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            {/* <Books data ={data}></Books> */}
            {/* <Book data={data}></Book> */}
            <Books data={data}></Books>
            
        </div>
    );
};

export default Home;