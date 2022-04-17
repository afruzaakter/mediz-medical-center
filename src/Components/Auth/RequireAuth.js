import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({Children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return<p>Loading</p>
    }
    if(user){
        return Children;
    }
    else{
        return<Navigate to="/login" state={{from: location}} replace></Navigate>
    }
};

export default RequireAuth;