import React from 'react';

const Checkout = () => {
    return (
        <div className='container  p-5 m-5'>
          <div className='login-container'>
          <div className='login-title'>
              <h1>Contact Info</h1>
            <form className='login-form' >
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="text" name="phone" id="" placeholder='Phone Number' />
                <input  type="email" placeholder='Your Email' />          
                <input type="password" placeholder='Password' />
              
                <button>Submit</button>
            </form>


           </div>
          </div>
            </div>
       
    );
};

export default Checkout;