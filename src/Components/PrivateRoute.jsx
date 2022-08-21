import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const PrivateRoute = ({children}) => {
    const {state} = useContext(AuthContext)

    if(!state.isAuth){
        return <Navigate to="/Login"/>
    }
  return children
}

export default PrivateRoute