import React from 'react'
import brandLogo from '../assets/logo.png'
import useHistory from '../hooks/useHistory'

const Logo = ({redirect, ...props}) => {

    const navigate = useHistory()

  return (
    <div onClick={() => redirect && navigate('/')} {...props} >
        <img alt="logo" className='w-[60px]' src={brandLogo} />
        <h3 className='text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl' >NOVA</h3>
    </div>
  )
}

export default Logo