import React, { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import { classNames } from '../../utils/function'

export const CustomMenu = ({ children, ...props }) => <Menu {...props}>{children}</Menu>
export const MenuAsButton = ({ children, ...props }) => <Menu.Button {...props}>{children}</Menu.Button>
export const MenuAsList = ({ children, ...props }) => <Menu.Items {...props}>{children}</Menu.Items>

export const MenuAsItem = ({ lists, ...props }) => {
    return <Fragment {...props} >
        {lists.map(({ id, name, to }) => <Menu.Item key={id} > {({ active }) => () => <NavLink to={to} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} >{name}</NavLink>}</Menu.Item>)}
    </Fragment>
}