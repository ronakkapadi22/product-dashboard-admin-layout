import React from 'react'
import { Tab } from '@headlessui/react'

export const CustomTab = ({ children, ...props }) => <Tab {...props} >{children}</Tab>
export const Tabs = ({ children, ...props }) => <Tab.Group {...props} > {children} </Tab.Group>
export const TabLists = ({ children, ...props }) => <Tab.List {...props} > {children} </Tab.List>
export const TabPanels = ({ children, ...props }) => <Tab.Panels {...props} > {children} </Tab.Panels>
export const TabPanel = ({ children, ...props }) => <Tab.Panel {...props} > {children} </Tab.Panel>