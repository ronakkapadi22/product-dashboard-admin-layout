import { constant } from "../constant/index";

export const setLoggedUser = (payload) => {
    return {
        type: constant.USER_DATA,
        payload
    }
}