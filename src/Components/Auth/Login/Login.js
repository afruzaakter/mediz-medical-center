import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    //Email Validation part
    const handleEmailChange = (e) => {

    }
    //Password Validation Part
    const handlePasswordChange = (e) => {

    }

    // Submit data
    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div className='login-container'>
            <div className='login-title'>LOGIN </div>
            <form className='login-form' onSubmit={handleLogin}>
                <input onChange={handleEmailChange} type="email" placeholder='Your Email' />

                {/* {errors?.email && <p className='text-danger'>{errors.email}</p>} */}

                <input onChange={handlePasswordChange} type="password" placeholder='Password' />
                {/* {errors?.password && <p className='text-danger'>{errors.password}</p>} */}
                <button>Login</button>
            </form>



            {/* {hookError && <p className='text-danger'>{hookError?.message}</p>} */}

            <p className="redirect">
                New to Mediz?{" "}
                <Link to="/signup" className='redirect-span' >Create New Account</Link>
            </p>
            <Social></Social>
        </div>
    );
};

export default Login;