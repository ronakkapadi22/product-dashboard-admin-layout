import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../common/Forms/Button'
import ProductBar from '../common/ProductBar'
import ProductHeader from '../common/ProductHeader'
import { CustomTab, TabLists, TabPanel, TabPanels, Tabs } from '../common/utilities/Tabs'
import useLanding from '../components/landing'

const Topbar = () => {

    const { open, setOpen, classNames, product_navigation, isLoggedIn } = useLanding()

    return <ProductBar className="bg-white" >
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                            <div className="flex px-4 pt-5 pb-2">
                                <Button
                                    type="button"
                                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                    handleClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </Button>
                            </div>

                            {/* Links */}
                            <Tabs as="div" className="mt-2">
                                <div className="border-b border-gray-200">
                                    <TabLists className="-mb-px flex space-x-8 px-4">
                                        {product_navigation.categories.map((category) => (
                                            <CustomTab
                                                key={category.name}
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                                        'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                    )
                                                }
                                            >
                                                {category.name}
                                            </CustomTab>
                                        ))}
                                    </TabLists>
                                </div>
                                <TabPanels as={Fragment}>
                                    {product_navigation.categories.map((category) => (
                                        <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                                            <div className="grid grid-cols-2 gap-x-4">
                                                {category.featured.map((item) => (
                                                    <div key={item.name} className="group relative text-sm">
                                                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                            <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                                        </div>
                                                        <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                            {item.name}
                                                        </a>
                                                        <p aria-hidden="true" className="mt-1">
                                                            Shop now
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                            {category.sections.map((section) => (
                                                <div key={section.name}>
                                                    <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                                        {section.name}
                                                    </p>
                                                    <ul className="mt-6 flex flex-col space-y-6"
                                                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}>
                                                        {section.items.map((item) => (
                                                            <li key={item.name} className="flow-root">
                                                                <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </TabPanel>
                                    ))}
                                </TabPanels>
                            </Tabs>

                            {/* <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                {product_navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div> */}

                            {isLoggedIn ? null : <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                <div className="flow-root">
                                    <NavLink to="/login" className="-m-2 block p-2 font-medium text-gray-900">
                                        Sign in
                                    </NavLink>
                                </div>
                                <div className="flow-root">
                                    <NavLink to="/signup" className="-m-2 block p-2 font-medium text-gray-900">
                                        Create account
                                    </NavLink>
                                </div>
                            </div>}

                            <div className="border-t border-gray-200 py-6 px-4">
                                <span className="-m-2 flex items-center p-2">
                                    <img
                                        src="https://countryflagsapi.com/png/in"
                                        alt="flag"
                                        className="block h-auto w-5 flex-shrink-0"
                                    />
                                    <span className="ml-3 block text-base font-medium text-gray-900">INR</span>
                                    <span className="sr-only">, change currency</span>
                                </span>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
        <ProductHeader {...{ setOpen, navigation: product_navigation, classNames, isLoggedIn }} />
    </ProductBar>
}

export default Topbar