import React from 'react'
import useAddresses from '../../components/addresses'
import AddressCard from './AddressCard'

const Addresses = ({ ...props }) => {

    const { addresses } = useAddresses()

    return (
        <section {...props} >
            <div className='px-5 py-24 mx-auto flex flex-wrap' >
                <div className="flex flex-col text-center w-full mb-5">
                    <h2 className="text-md text-gray-700 tracking-widest font-medium title-font mb-1">Addresses</h2>
                </div>
                {
                    addresses.map((data, index) => <AddressCard key={index} {...data} /> )
                }
            </div>
        </section>
    )
}

export default Addresses