import React from 'react'
import brandLogo from '../assets/logo.png'
import useHistory from '../hooks/useHistory'

const Logo = ({ redirect, name, logoClassName, ...props }) => {

  const navigate = useHistory()

  switch (name) {
    case 'logo':
      return <img alt="logo" onClick={() => redirect && navigate('/')} className={logoClassName} src={brandLogo} />
    default:
      return (
        <div onClick={() => redirect && navigate('/')} {...props} >
          <img alt="logo" className='w-[40px]' src={brandLogo} />
          <h3 className='text-2xl font-bold tracking-tight text-indigo-600' >NOVA</h3>
        </div>
      )
  }
}

export default Logo