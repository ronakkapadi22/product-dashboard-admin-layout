import React from 'react'
import useHistory from '../../hooks/useHistory'
import Button from '../Forms/Button'

const TotalAmount = ({sub_total, ...props}) => {

    const navigate = useHistory()

    return (
        <div {...props}>
            <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p className='text-2xl' >$ {sub_total}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
                <Button {...{label: "Checkout"}} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" />
            </div>
            <div className="mt-2 flex justify-center text-center text-sm text-gray-500">
                <p>
                    or <Button handleClick={() => navigate('/')} className="font-medium text-indigo-600 w-full hover:text-indigo-500">
                    Continue Shopping <span aria-hidden="true"> &rarr;</span> </Button>
                </p>
            </div>
        </div>
    )
}

export default TotalAmount