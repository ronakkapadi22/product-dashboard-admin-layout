import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Topbar from '../Topbar'
import Item from '../../common/Item'
import Addresses from '../../common/utilities/Addresses'
import List from '../../common/utilities/List'
import TotalAmount from '../../common/utilities/TotalAmount'

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    {
        id: 3,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    }
]

const Cart = ({ ...props }) => {
    return (
        <section className='w-full h-full' {...props} >
            <Topbar />
            <div className='grid gap-4 grid-cols-12 px-4 sm:px-8 p-4' >
                <div className='col-span-12 md:col-span-7'>
                    <div className='flex items-center justify-center mt-4 mb-4 xs:mb-2'>
                        <h1 className='sm:text-2xl md:mb-4 mt-5 font-bold xs:text-xl text-xl text-indigo-600' >Shopping Cart</h1>
                        <ShoppingCartIcon className='mt-5 md:mb-4 ml-2 font-bold sm:w-[40px] w-[30px] text-indigo-600' />
                    </div>
                    <div className="flow-root">
                        <List className="divide-y divide-gray-200">
                            {products.map(({ id, ...data }) => <Item className="flex py-6 px-1 sm:w-[460px] sm:mx-auto md:w-full w-full lg:mx-auto lg:w-[500px]" key={id} {...data} />)}
                        </List>
                    </div>
                    <TotalAmount className="border-t border-gray-200 py-6 px-4 lg:px-0 sm:w-[460px] sm:px-1 md:w-full mx-auto lg:w-[500px]" {...{ sub_total: 200.00 }} />
                </div>
                <div className='col-span-12 md:col-span-5'>
                    <Addresses className="text-gray-400 body-font" />
                </div>
                <div className='border col-span-12'>col4</div>
            </div>
        </section>
    )
}

export default Cart