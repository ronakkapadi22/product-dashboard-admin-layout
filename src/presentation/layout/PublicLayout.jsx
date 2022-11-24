import React from 'react'
import { Outlet } from 'react-router-dom'
import NotFound from '../NotFound'

const PublicLayout = ({ isDefaultAccess, ...props }) => {
    return isDefaultAccess ? <Outlet {...props} /> : <NotFound />
}

export default PublicLayout