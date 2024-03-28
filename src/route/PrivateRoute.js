import React from 'react';
import ProductAll from '../page/ProductAll';
import { Navigate } from 'react-router-dom';
import DetailProduct from '../page/DetailProduct';

const PrivateRoute = ({authenticate}) => {
    return authenticate===true? <DetailProduct/> : 
    <Navigate to='/login'></Navigate>
        
    
};

export default PrivateRoute;