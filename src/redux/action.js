import { constant } from "../constant/index";

export const setLoggedUser = (payload) => {
    return {
        type: constant.USER_DATA,
        payload
    }
}

export const getToken = (payload) => {
    return {
        type: constant.TOKEN,
        payload,
    }
}

export const isUserLoggedIn = (payload) => {
    return {
        type: constant.IS_LOGGED_IN,
        payload,
    }
}