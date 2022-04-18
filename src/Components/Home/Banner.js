import React from 'react';

import banner from '../../../src/images/bannar/Doctors-bro.png'

import '../Home/Home.css';
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
          <button className='btn btn-primary mt-2'>Learn More</button>
        </div>
      </div>

    </div>
  );
};

export default Banner;