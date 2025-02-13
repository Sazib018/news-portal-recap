import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
const location = useLocation()
console.log(location);

    const { user } = useContext(AuthContext)

    if (user && user.email) {
        return <div>{children}</div>
    }
    return (
        <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivateRoute;