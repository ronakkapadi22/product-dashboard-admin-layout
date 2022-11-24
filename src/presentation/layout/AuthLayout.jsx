import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = ({ isLoggedIn, ...props }) => {
    return !isLoggedIn ? <Outlet {...props} /> : <Navigate to='/' replace />
}

export default AuthLayout