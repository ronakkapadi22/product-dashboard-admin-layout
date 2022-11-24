import React from 'react'

const ProductBar = ({children, ...props}) => {
  return (
    <div {...props} >
        {children}
    </div>
  )
}

export default ProductBar