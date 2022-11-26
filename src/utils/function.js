import jwt_decode from "jwt-decode";
import { setLoggedUser } from "../redux/action";
import { store } from '../store'

export const retry = (fn, retriesLeft = 5, interval = 1000) => {
    return new Promise((resolve, reject) => {
        fn().then(resolve).catch((error) => {
            setTimeout(() => {
                if (retriesLeft === 1) {
                    reject(error);
                    return;
                }
                retry(fn, retriesLeft - 1, interval).then(resolve, reject);
            }, interval);
        });
    });
}

export const handleLogout = () => {
    localStorage.clear()
    store.dispatch(setLoggedUser({}))
    // window.location.href = '/'
}

export const classNames = (...classes) => classes.filter(Boolean).join(' ')

export const decodeToken = (token) => {
    if (!token) return null
    return jwt_decode(token);
}

export const isTokenActivated = (token) => {
    if (!token) return false
    const decoded = jwt_decode(token)
    return (decoded?.exp > Date.now() / 1000)
}