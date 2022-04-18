import React from 'react';
import image from '../../images/bannar/template (1).png'
const About = () => {
    return (
        <div className='container m-5 p-4 '>
            {/* <h1>this is about page</h1> */}
            <div className='d-flex justify-content-around align-items-center banner-section'>
                <div className=''>
                  <img className='img-fluid' src={image} alt="" />
                </div>
                <div className=''>
                   <h2>About Me</h2>
                    <p>Hi, My name is afruza akter sonia. I  am a student. My main goal is to learn the work of the web development well And a job in a good company. </p>
                </div>
            </div>
        </div>
    );
};

export default About;