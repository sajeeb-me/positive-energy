import React from 'react';
import { Link } from 'react-router-dom';
import './CustomerReviews.css'
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerReviews = ({ review }) => {
    const { name, profession, image, star, text } = review;
    return (
        <div className='col'>
            <section className='review-container border rounded-3 p-4'>
                <div>
                    <Rating
                        initialRating={star}
                        emptySymbol={<FontAwesomeIcon className='mx-1' icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon className='mx-1' style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating>
                </div>
                <div className='d-flex justify-content-center align-items-center my-3'>
                    <div style={{ width: '50px' }} className='me-2'>
                        <img className='img-fluid rounded-circle' src={image} alt="" />
                    </div>
                    <div className='text-start ms-2'>
                        <h6 className='m-0'>{name}</h6>
                        <p className='m-0'><small>{profession}</small></p>
                    </div>
                </div>
                <div>
                    <p>{text.slice(0, 100)}...<Link to='/reviews'>see more</Link></p>
                </div>
            </section>
        </div>
    );
};

export default CustomerReviews;