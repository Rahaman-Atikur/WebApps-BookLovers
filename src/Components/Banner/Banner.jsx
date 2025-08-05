import React from 'react';
// import bookImage from '../../assets/books.jpg'
import bookImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div>
            <div>
                <h1>Its My Lovely Banner</h1>
                <button className='btn'>Test</button>
            </div>
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};
export default Banner;