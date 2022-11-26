import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../apis/auth'
import useHistory from '../hooks/useHistory'
import { setLoggedUser } from '../redux/action'
import { decodeToken, isTokenActivated } from '../utils/function'
import { setDataFromLocal } from '../utils/localstorage'
import { validation } from '../utils/validation'

const initialState = {
    email: "",
    password: ""
}

const useLogin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState(initialState)
    const [formError, setFormError] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [internalError, setInternalError] = useState(null)


    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setFormError({ ...formError, [name]: validation(name, value) })
    }

    const initialFormData = [
        {
            id: "email",
            name: "email",
            label: "Email",
            placeholder: "xyz@mail.com",
            value: formData.email,
            type: "email",
            onChange: handleChange,
            errorMessage: formError.email
        },
        {
            id: "password",
            name: "password",
            label: "Password",
            placeholder: "●●●●●●●●●●",
            value: formData.password,
            type: "password",
            onChange: handleChange,
            errorMessage: formError.password
        }
    ]

    const handleLogin = async () => {
        setIsLoading(true)
        setInternalError(null)
        try {
            const response = await userLogin(formData)
            if (response) {
                setIsLoading(false)
                const { data } = response
                setDataFromLocal('token', data?.token)
                dispatch(setLoggedUser({ token: data?.token, isLogged: isTokenActivated(data?.token), user: decodeToken(data?.token) }))
                history('/')
            }
        } catch (error) {
            if (error.response) {
                const { data } = error.response
                setInternalError(data?.message)
            }
            setIsLoading(false)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            let error = {}
            Object.keys(formData).forEach(val => {
                const message = validation(val, formData[val])
                if (message) { error[val] = message }
            })
            if (Object.keys(error).length) {
                setFormError({ ...formError, ...error });
                return
            }
            await handleLogin()


        } catch (error) {
            return error
        }

    }

    return { handleSubmit, initialFormData, isLoading, internalError }
}

export default useLogin