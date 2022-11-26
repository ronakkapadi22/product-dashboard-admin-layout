import axios from "axios"
import { clearLocalStorage } from "../utils/localstorage";
import { handleLogout } from "../utils/function";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_SERVER_URL}`,
})

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token")
        config.headers.Accept = "application/json";
        config.headers.Authorization = token;
        config.headers["Content-Type"] = "application/json";
        return config
    },
    error => Promise.reject(error)
)

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (
            [401, 402, 403].includes(error.response.status)
        ) {
            clearLocalStorage()
            handleLogout()
        }
        return Promise.reject(error)
    }
)

export default instance
