import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    //error handle
     const [error, setError]=useState({
         email: "",
         password: "",
         general: "",
     })

     const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookerror,
      ] = useSignInWithEmailAndPassword(auth);
      //Navigate part
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

      useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    //Email Validation part

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        // console.log(validEmail);
        if(validEmail){
          setUserInfo({...userInfo, email: e.target.value});
          setError({...error, email: " "});
        }
        else{
           setError({...error, email: "❌ Invalid Email"});
           setUserInfo({...userInfo, email: " "});
        }
      
       
    }
    //Password Validation Part
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
  
        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setError({ ...error, password: "" });
        } else {
            setError({ ...error, password: "❌ Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    }
    
    // Submit data
    const handleLogin = (e) => {
        e.preventDefault();
       signInWithEmailAndPassword(userInfo.email, userInfo.password);
    }

    return (
        <div className='login-container'>
            <div className='login-title'>LOGIN </div>
            <form className='login-form' onSubmit={handleLogin}>
                <input onChange={handleEmailChange} type="email" placeholder='Your Email' />

                {error?.email && <p className='text-danger'>{error.email}</p>}

                <input onChange={handlePasswordChange} type="password" placeholder='Password' />
                {error?.password && <p className='text-danger'>{error.password}</p>}
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