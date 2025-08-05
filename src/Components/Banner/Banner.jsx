import React from 'react';
// import bookImage from '../../assets/books.jpg'
import bookImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-around items-center'>
            <div>
                <h1>Its My Lovely Banner</h1>
                <button className='btn-primary'>Test</button>
            </div>
            <div>
                <img className='w-3/12' src={bookImage} alt="" />
            </div>
        </div>
    );
};
export default Banner;