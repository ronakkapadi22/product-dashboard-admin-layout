import React from 'react'

const Button = ({ label, children, handleClick, ...props }) => {
  return (
    <button {...props} type={props.type || 'button'} onClick={handleClick} >
      {children || label}
    </button>
  )
}

export default Button