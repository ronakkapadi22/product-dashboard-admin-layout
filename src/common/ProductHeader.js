import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../presentation/Logo'
import Button from './Forms/Button'
import Badge from './utilities/Badge'

const ProductHeader = ({ setOpen, isLoggedIn, navigation, classNames }) => {
    return (
        <header className="relative bg-white">
            <nav aria-label="Top" className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        <Button className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                            handleClick={() => setOpen(true)} >
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Button>

                        {/* Logo */}
                        <div className="ml-4 flex lg:ml-0">
                            <Logo redirect name="logo" logoClassName="h-8 w-auto" />
                        </div>

                        {/* Flyout menus */}
                        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                            <div className="flex h-full space-x-8">
                                {navigation.categories.map((category) => (
                                    <Popover key={category.name} className="flex">
                                        {({ open }) => (
                                            <>
                                                <div className="relative flex">
                                                    <Popover.Button
                                                        className={classNames(
                                                            open
                                                                ? 'border-indigo-600 text-indigo-600'
                                                                : 'border-transparent text-gray-700 hover:text-gray-800',
                                                            'outline-none relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                        )}
                                                    >
                                                        {category.name}
                                                    </Popover.Button>
                                                </div>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Popover.Panel className="z-40 absolute inset-x-0 top-full text-sm text-gray-500">
                                                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                        <div className="relative bg-white">
                                                            <div className="mx-auto w-full px-8">
                                                                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                        {category.featured.map((item) => (
                                                                            <div key={item.name} className="group relative text-base sm:text-sm">
                                                                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                                    <img
                                                                                        src={item.imageSrc}
                                                                                        alt={item.imageAlt}
                                                                                        className="object-cover object-center"
                                                                                    />
                                                                                </div>
                                                                                <NavLink to={item.href} className="mt-6 block font-medium text-gray-900">
                                                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                                    {item.name}
                                                                                </NavLink>
                                                                                <p aria-hidden="true" className="mt-1">
                                                                                    Shop now
                                                                                </p>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                                        {category.sections.map((section) => (
                                                                            <div key={section.name}>
                                                                                <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                                    {section.name}
                                                                                </p>
                                                                                <ul
                                                                                    aria-labelledby={`${section.name}-heading`}
                                                                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                >
                                                                                    {section.items.map((item) => (
                                                                                        <li key={item.name} className="flex">
                                                                                            <NavLink to={item.href} className="hover:text-gray-800">
                                                                                                {item.name}
                                                                                            </NavLink>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                ))}

                                {navigation.pages.map((page) => (
                                    <NavLink key={page.name} to={page.href} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800" >
                                        {page.name}
                                    </NavLink>
                                ))}

                            </div>
                        </Popover.Group>

                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                <NavLink to="/login" href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                    Sign in
                                </NavLink>
                                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                <NavLink to="/signup" href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                    Create account
                                </NavLink>
                            </div>

                            <div className="hidden lg:ml-8 lg:flex">
                                <div className="flex items-center text-gray-700 hover:text-gray-800">
                                    <img className="block h-auto w-5 flex-shrink-0" src="https://countryflagsapi.com/png/in" alt="flag" />
                                    <span className="ml-3 block text-sm font-medium">INR</span>
                                </div>
                            </div>

                            {/* Search */}
                            <div className="flex lg:ml-6 p-2 text-gray-400 hover:text-gray-500">
                                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                            </div>

                            {/* Cart */}
                            <div className="ml-4 flow-root lg:ml-6">
                                {isLoggedIn ? <UserCircleIcon className="text-indigo-500 h-8 w-8" aria-hidden="true" /> : <NavLink className="flex relative" to="/add-to-cart/04">
                                    <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                    <Badge className="absolute px-1.5 text-[12px] -right-[8px] -top-[4px] text-center font-bold bg-red-600 text-white rounded-full" {...{ count: 1, type: 'count' }} />
                                </NavLink>}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default ProductHeader