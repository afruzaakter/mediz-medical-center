import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    // .then(data => console.log(data))
    },[])
    return (
        <div   className='container m-5 p-5'>
            <h2 className='title text-center mb-5'>My Services</h2>
            <div className='row row-cols-1 row-cols-md-3 '>
                {
                   products.map(product =><Service key = {product.id} product={product}></Service>) 
                }
            </div>
        </div>
    );
};

export default Services;