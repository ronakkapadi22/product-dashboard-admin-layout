import { PencilIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { classNames } from '../../utils/function'
import Badge from './Badge'

const AddressCard = ({ isDefaultShipping, shipping_name, type_of_address, address_line_1, ...props }) => {
    return (
        <div className={classNames(isDefaultShipping ? "border-indigo-600" : "border-gray-400","relative p-4 w-full mx-auto lg:w-[full] xl:w-[600px] border-2 rounded-lg mb-4 cursor-pointer")}>
            <div className="flex rounded-lg h-full p-4 flex-col">
                <div className="flex items-center mb-1">
                    <div className="inline-flex items-center justify-center flex-shrink-0">
                        <Badge className={classNames(isDefaultShipping? "bg-indigo-500" : "bg-gray-400", "text-white px-[8px] py-[2px] rounded-2xl")} {...{type: "label", label: type_of_address}} />
                    </div>
                </div>
                <div className="flex-grow">
                    <p className='text-lg text-gray-600 font-bold' >{shipping_name} - ({props.contact_number})</p>
                    <p className='text-md text-gray-500 font-medium' >{address_line_1}, {props.area}</p>
                    <p className='text-md text-gray-500 font-medium' >{props.city} ({props.pin_code})</p>
                    <p className='text-md text-gray-500 font-medium' >{props.state} - {props.country}</p>
                </div>
                <div className={classNames(!isDefaultShipping ? "bg-gray-400" : "bg-indigo-500", 'absolute w-8 h-8 rounded-full top-[0.75rem] right-[0.75rem]')} >
                        <PencilIcon className='w-4 h-4 mt-[8px] mx-auto text-white' />
                </div>
            </div>
        </div>
    )
}

export default AddressCard