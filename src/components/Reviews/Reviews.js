import React from 'react';
import useReviews from '../../hooks/useReviews';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='container'>
            <h1 className='mt-4'>What our Customer say!</h1>
            <p>Here you can find, what our Customers are saying about our Product.</p>
            <section className='my-4 row row-cols-1 row-cols-md-3 g-4'>
                {
                    reviews.map(review => <CustomerReviews key={review.id} review={review}></CustomerReviews>)
                }
            </section>
        </div>
    );
};

export default Reviews;