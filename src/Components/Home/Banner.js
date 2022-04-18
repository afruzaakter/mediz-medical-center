import React from 'react';
// import { Carousel } from 'react-bootstrap';
import banner from '../../../src/images/bannar/Doctors-bro.png'
// import banner1 from '../../../src/images/bannar/bannar-1.jpg'
// import banner2 from '../../../src/images/bannar/bannar-2.jpg'
// import banner3 from '../../../src/images/bannar/bannar-3.jpg'
// import '../Home/Home.css';
const Banner = () => {
    return (
        <div className='container m-5 p-5'>
        <div className='d-flex justify-content-around align-items-center'>
          <div className=' w-50'>
            <img className='w-75' src={banner} alt="" />
          </div>
          <div>
            <h1><span className='title'>Stay Safe</span>, Stay Healthy.
             
            </h1>
            <h3>Caring For <span className='title'>Your Life</span></h3>
            <button className='btn btn-primary'>Learn More</button>
          </div>
        </div>

        </div>
    );
};

export default Banner;