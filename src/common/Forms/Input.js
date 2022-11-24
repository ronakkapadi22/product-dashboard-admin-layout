import React from 'react'

const Input = ({ labelClass, inputClass, errorMessage, className, label, ...props }) => {
  return (
    <div className={className} >
      <label className={labelClass} >{label}</label>
      <input className={inputClass} {...props} />
      <span className="text-red-500 font-medium text-sm" >{errorMessage}</span>
    </div>
  )
}

export default Input