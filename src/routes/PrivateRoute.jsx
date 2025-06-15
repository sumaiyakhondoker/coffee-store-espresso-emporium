import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { PulseLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    
    const location = useLocation()
    // console.log(location);
    if(loading){
        return <div className='min-h-screen flex justify-center items-center'>
            <PulseLoader />
        </div>
    }
    if(user){
        return children;
    }
    
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;