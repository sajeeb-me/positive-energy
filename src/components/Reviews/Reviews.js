import React from 'react';
import useReviews from '../../hooks/useReviews';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='container'>
            <section className='my-4 row row-cols-1 row-cols-md-3 g-4'>
                {
                    reviews.map(review => <CustomerReviews key={review.id} review={review}></CustomerReviews>)
                }
            </section>
        </div>
    );
};

export default Reviews;