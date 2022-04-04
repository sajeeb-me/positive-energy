import React from 'react';
import ChartArea from '../ChartArea/ChartArea';
import ChartBar from '../ChartBar/ChartBar';
import ChartLine from '../ChartLine/ChartLine';

const Dashboard = () => {
    return (
        <div className='container'>
            <section className='my-4'>
                <h4 className='my-4' style={{ color: '#1E7347' }}>Last 6 Months Summary</h4>
                <div className='row row-cols-1 row-cols-lg-2'>
                    <section className='col'>
                        <h5 className='my-3'>Revenue of last 6 Months</h5>
                        <ChartLine />
                    </section>
                    <section className='col'>
                        <h5 className='my-3'>Total sells of last 6 Months</h5>
                        <ChartBar />
                    </section>
                </div>
                <section className='my-5 pt-3 d-flex flex-column align-items-center'>
                    <h5 className='my-3'>Investment and Revenue of last 6 Months</h5>
                    <ChartArea />
                </section>
            </section>
        </div>
    );
};

export default Dashboard;