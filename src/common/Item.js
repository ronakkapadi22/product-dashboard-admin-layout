import { TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Button from './Forms/Button'

const Item = ({imageSrc, imageAlt, href, name, price, color, quantity, ...props }) => {
    return (
        <li {...props} >
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover object-center" />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3> <span>{name}</span> </h3>
                        <div className="flex">
                        <Button className="font-medium text-indigo-600 hover:text-indigo-500">
                            <TrashIcon className='font-bold w-[25px] text-red-500' />
                        </Button>
                    </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {quantity}</p>
                    <p className="ml-4 text-md font-medium">{price}</p>
                </div>
            </div>
        </li>
    )
}

export default Item