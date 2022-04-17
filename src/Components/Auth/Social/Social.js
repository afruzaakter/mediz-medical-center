import React, { useEffect, useState } from 'react';
import GoogleLogo from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook (1).png';
import gitHub from '../../../images/social/github.png';
import './Social.css';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
const Social = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password:"",
        confirmPassword: "",
    });
    //Navigate part
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
      if (user) {
          navigate(from);
      }
  }, []);
    //React Firebase Google 
  const [
    signInWithGoogle, user, loading, error
  ] = useSignInWithGoogle(auth);

  const handleGoogle = (e) =>{
      e.preventDefault()
      signInWithGoogle(userInfo.email, userInfo.password)
  }

    return (
        <div>

            <div className="horizontal-divider">
                <div className="line-left"></div>
                <p>or</p>
                <div className="line-right" >
                </div>
            </div>
            <div className="input-wrapper">
                <button onClick={handleGoogle} className="google-auth ms-2">
                    <img className='me-2' src={GoogleLogo} alt="" />
                    <span className='ms-3'> Continue with Google</span>
                </button>
            </div>
            
            <div className="input-wrapper">
                <button className="google-auth ms-2">
                    <img className='me-2' src={gitHub} alt="" />
                    <span className='ms-3'> Continue with GitHub</span>
                </button>
            </div>
            <div className="input-wrapper">
                <button className="google-auth ms-2">
                    <img className='me-2  ' src={facebook} alt="" />
                    <span className='ms-3'> Continue with Facebook</span>
                </button>
            </div>
        </div>
    );
};

export default Social;