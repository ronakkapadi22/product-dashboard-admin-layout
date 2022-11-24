import React from 'react'

const Button = ({label, children, handleClick, ...props}) => {
  return (
    <button {...props} onClick={handleClick} >
        {children || label}
    </button>
  )
}

export default Button