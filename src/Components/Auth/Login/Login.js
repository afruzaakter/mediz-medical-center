
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    //error handle
    const [error, setError] = useState({
        email: "",
        password: "",
        general: "",
    })
    //  google signin firebase hook 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);
    //Navigate part
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // reset password firebase hook 
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    useEffect(() => {
        if (user) {
            // navigate(from);
            navigate(from, { replace: true });
        }
    }, [user]);

    //Email Validation part

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        // console.log(validEmail);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setError({ ...error, email: " " });
        }
        else {
            setError({ ...error, email: "❌ Invalid Email" });
            setUserInfo({ ...userInfo, email: " " });
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



    // Error handle part 

    useEffect(() => {
        const error = hookError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [hookError])

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
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

            <ToastContainer />

            {/* {hookError && <p className='text-danger'>{hookError?.message}</p>} */}

            <p className="redirect">
                New to Mediz?{" "}
                <Link to="/signup" className='redirect-span' >Create New Account</Link>
            </p>
            <p >
                Forget Password?{" "}
                <Button onClick={resetPassword} className='btn btn-link text-light'>Reset Password</Button>
            </p>
            
            <Social></Social>
        </div>
    );
};

export default Login;