import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Image from '../../images/main-image.jpg'
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import './Home.css'

const Home = () => {

    const [reviews] = useReviews();

    const navigate = useNavigate();

    return (
        <div className='container my-4'>
            <div className='row row-cols-1 row-cols-md-2 g-4 g-md-0 my-5'>
                <section className='col d-flex justify-content-center header-image'>
                    <div className='image-container'>
                        <img className='img-fluid' src={Image} alt="" />
                    </div>
                </section>
                <section className='col d-flex align-items-center header-text'>
                    <div className='text-start header-info'>
                        <h1>Recharge YourSelf</h1>
                        <h1><small style={{ fontWeight: '400' }}>with</small> <span>POSITIVE ENERGY</span></h1>
                        <p>Positive Energy Drink is a energy drink which provide you full of energy when you are tired or thirsty. </p>
                        <button className='btn btn-outline-success info-btn'>More info</button>
                    </div>
                </section>
            </div>
            <section className='my-5 pt-5'>
                <h1>Customer Reviews</h1>
                <p>Here you can find, what our Customers are saying about our Product.</p>
                <div className='my-4 row row-cols-1 row-cols-md-3 g-4'>
                    {
                        reviews.slice(0, 3).map(review => <CustomerReviews key={review.id} review={review}></CustomerReviews>)
                    }
                </div>
                <button onClick={() => navigate('/reviews')} className='btn btn-outline-success info-btn my-4'>See all Reviews</button>
            </section>
        </div>
    );
};

export default Home;