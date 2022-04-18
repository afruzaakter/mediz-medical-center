import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className='bg-secondary  footer-design '>
            <p className='text-center text-light m-3'><small > © {year} copyright: mediz.com </small></p>
        </footer>
    );
};

export default Footer;