import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../presentation/layout/AuthLayout'
import PublicLayout from '../presentation/layout/PublicLayout'
import NotFound from '../presentation/NotFound'
import { authRoutes, publicRoutes } from './routes'

const Routing = ({ isLoggedIn, ...props }) => {
  return (
    <Routes {...props} >
      <Route path='/' element={<PublicLayout isDefaultAccess />} >
        {publicRoutes(true).map(({ id, ...otherProps }) => <Route index key={id} {...otherProps} />)}
      </Route>
      <Route path='/' element={<AuthLayout isLoggedIn={isLoggedIn} />} >
        {authRoutes(true).map(({ id, ...otherProps }) => <Route index key={id} {...otherProps} />)}
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing