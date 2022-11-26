import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import withAuthenticated from '../../hoc/withAuthenticated'

const PrivateLayout = ({ ...props }) => <WithAuthenticatedOutlet {...props} replace {...{ to: '/' }} />
export default PrivateLayout

const WithAuthenticatedOutlet = withAuthenticated(Outlet, Navigate)