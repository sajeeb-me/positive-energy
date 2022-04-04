import React from 'react';
import Image from '../../images/not-found.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-img d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
            <img className='img-fluid' src={Image} alt="" />
        </div>
    );
};

export default NotFound;