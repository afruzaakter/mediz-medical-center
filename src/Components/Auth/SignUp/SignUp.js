import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import { useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password:"",
        confirmPassword: "",
    });
    //error handle part
    const [error, setError] = useState({
        email: "",
        password: "",
        general: "",
    });

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    //React Firebase Email and Password hook
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      hookerror,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
   //update profile name
   const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
  //Email Validation part
    const handleEmailChange = (e) =>{
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
    const handlePasswordChange = (e) =>{
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
    //Password Validation Part
    const handleConfirmPasswordChange = (e) =>{
     if(e.target.value === userInfo.password){
       setUserInfo({...userInfo, confirmPassword: e.target.value});
       setError({...error, password: " "});
     }
     else{
       setError({...error, password: "❌ Password's don't match"});
       setUserInfo({...userInfo, confirmPassword: " "});
     }
    }


    // Submit data
  const handleSignUp = async(e) =>{
      e.preventDefault();
      // console.log(userInfo);
      const displayName = e.target.name.value;
     await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
     await updateProfile({ displayName });
     console.log('Updated profile');
     navigate('/home');
      
  }
    return (
        <div className='login-container'>
        <div className='login-title'>SIGN UP </div>
       <form className='login-form' onSubmit={handleSignUp }>
           <input onChange={handleEmailChange} type="email"  placeholder='Your Email'/>

           {error?.email && <p className='error-massege'>{error.email}</p>}
           
           <input onChange={handlePasswordChange} type="password" placeholder='Password' />
           {error?.password && <p className='error-massege'>{error.password}</p>}

           <input onChange={handleConfirmPasswordChange} type="password" placeholder='Confirm Password' />
      
           <button>Sign Up</button>
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