import React from 'react'
import { isTokenActivated } from '../utils/function'
import { getDataFromLocal } from '../utils/localstorage'

const withAuthenticated = (RenderComponent, NavigateComponent) => ({ to, replace, ...props }) => {

    const token = getDataFromLocal('token')

    return isTokenActivated(token) ? <RenderComponent {...props} /> : <NavigateComponent {...{ to, replace }} />
}

export default withAuthenticated
