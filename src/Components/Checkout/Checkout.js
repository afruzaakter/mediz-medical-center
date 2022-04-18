import React from 'react';

const Checkout = () => {
    return (
        <div className='container  p-5 m-5'>
            <div className='login-container'>
                <div className='login-title'>
                    <h1>Contact Info</h1>
                    <form className='login-form' >
                        <input type="text" name="name" id="" placeholder='First Name' />
                        <input type="text" name="name" id="" placeholder='Last Name' />
                        <input type="text" name="phone" id="" placeholder='Phone Number' />
                        <input type="text" placeholder='User Name' />
                        <input type="email" placeholder='Your Email' />


                        <button>Submit</button>
                    </form>


                </div>
            </div>
        </div>

    );
};

export default Checkout;