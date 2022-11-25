import { constant } from "../../constant/index";

const initialState = {
    isLogged: false,
    user: {},
    token: null
}

export const userData = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case constant.IS_LOGGED_IN:
            return {
                ...state, isLogged: payload
            }
        case constant.TOKEN:
            return {
                ...state, token: payload
            }
        case constant.USER_DATA:
            return {
                ...state, user: payload
            }
        default: return state
    }
}