import React from 'react'

const withAuthenticated = (RenderComponent, NavigateComponent) => ({ isLogged, to, replace, ...props }) => {
    return isLogged ?  <RenderComponent {...props} /> : <NavigateComponent {...{to, replace}} />
}

export default withAuthenticated
