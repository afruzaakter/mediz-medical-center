import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password:"",
    })

  //Email Validation part
    const handleEmailChange = (e) =>{

    }
    //Password Validation Part
    const handlePasswordChange = (e) =>{

    }
    //Password Validation Part
    const handleConfirmPasswordChange = (e) =>{
    
    }


    // Submit data
  const handleSignUp = (e) =>{
      e.preventDefault()
  }
    return (
        <div className='login-container'>
        <div className='login-title'>SIGN UP </div>
       <form className='login-form' onSubmit={handleSignUp }>
           <input onChange={handleEmailChange} type="email"  placeholder='Your Email'/>

           {/* {errors?.email && <p className='text-danger'>{errors.email}</p>} */}
           
           <input onChange={handlePasswordChange} type="password" placeholder='Password' />
           {/* {errors?.password && <p className='text-danger'>{errors.password}</p>} */}

           <input onChange={handleConfirmPasswordChange} type="password" placeholder='Password' />
      
           <button>Login</button>
       </form>

 
      
       {/* {hookError && <p className='text-danger'>{hookError?.message}</p>} */}

       <p className="redirect">
            Already have an account?{" "}
            <Link to="/login" className='redirect-span' >Login</Link>
        </p>
      <Social></Social>
    </div>
    );
};

export default SignUp;