import React from 'react'

const OfferHeading = ({children, offer_data, ...props}) => {
  return (
    <div {...props} >
        {children ? children : <p className="flex text-center h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          { offer_data || "Get free delivery on orders over $100"}
        </p>}
    </div>
  )
}

export default OfferHeading