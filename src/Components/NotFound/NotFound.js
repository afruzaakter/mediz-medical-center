import React from 'react';
import { Link } from 'react-router-dom';
import page from '../../images/social/404 image.png'
const NotFound = () => {
    return (
        <div>
            <img className='w-100 img-fluid' src={page} alt="" />
            <div className='container text-center'>
            <h4 className='mt-5 mb-3 '>Try Search or go to Home page</h4>
            <Link to='/home' className='btn signout p-2'>  Mediz Home Page</Link>
            </div>
        </div>
    );
};

export default NotFound;