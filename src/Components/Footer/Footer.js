import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className='bg-secondary  m-4 p-3 '>
            <p className='text-center text-light'><small > © {year} copyright: mediz.com </small></p>
        </footer>
    );
};

export default Footer;