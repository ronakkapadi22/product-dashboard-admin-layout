import axios from './index'

export const userLogin = async (payload) => {
    const response = await axios.post('/login', payload)
    return response
}