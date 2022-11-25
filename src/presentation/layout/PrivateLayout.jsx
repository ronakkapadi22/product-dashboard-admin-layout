import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import withAuthenticated from '../../hoc/withAuthenticated'

const PrivateLayout = ({isLoggedIn, ...props}) => {
  return <WithAuthenticatedOutlet {...props} replace {...{isLogged: isLoggedIn, to: '/'}} />
}

export default PrivateLayout

const WithAuthenticatedOutlet = withAuthenticated(Outlet, Navigate)