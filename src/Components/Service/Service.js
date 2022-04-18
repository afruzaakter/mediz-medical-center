import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({product}) => {
    const {name, img,price,description} = product;

    return (
        <div className='container'>
            <div className='col '>
                <div className='card service-design  p-3'>
                <img className='w-50 m-auto mb-2' src={img}  alt="" />
                <h4>{name}</h4>
                <h5>${price}</h5>
                <p>{description}</p>
                <Link to='/checkout'><button className='btn btn-primary'>Checkout</button> </Link>
                </div>

            </div>

        </div>
    );
};

export default Service;