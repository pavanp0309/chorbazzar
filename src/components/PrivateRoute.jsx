import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  
    const {isLoggedIn,isloading}=useAuth()

     if(isloading){
        return <h3 className='text-center py-3 text-danger fw-bold fs-3'>loading....</h3>
     }
     
     if(!isLoggedIn){
        return <Navigate to="/loginin" replace/>
     }

  return children
 
}

export default PrivateRoute
