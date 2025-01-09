import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
    if(localStorage.getItem('parent')){
return children
    }else{
        return <Navigate to='/login'></Navigate>
    }
}

export default Protected