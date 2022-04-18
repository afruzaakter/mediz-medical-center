import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className=' p-2'>
            <p className='text-center text-secondary m-3'><small > © {year} copyright: mediz.com </small></p>
        </footer>
    );
};

export default Footer;