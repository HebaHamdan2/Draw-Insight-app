import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedPage = ({children}) => {
    if(!localStorage.getItem('parent')){
        return children
            }else{
                return <Navigate to='/dashboard'></Navigate>
            }
}

export default ProtectedPage