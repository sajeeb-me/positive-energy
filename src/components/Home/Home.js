import React from 'react';
import Image from '../../images/main-image.jpg'
import './Home.css'

const Home = () => {
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
            </section>
        </div>
    );
};

export default Home;