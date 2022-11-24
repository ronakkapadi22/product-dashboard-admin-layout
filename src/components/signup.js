import { useState } from 'react'
import { validation } from '../utils/validation'

const initialFormState = {
    username: "",
    email: "",
    contact: "",
    password: "",
    confirm_password: ""
}

const useSignup = (otherData) => {

    const [formData, setFormData] = useState(initialFormState)
    const [formError, setFormError] = useState(initialFormState)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setFormError({ ...formError, [name]: validation(name, value, formData) })
    }

    const initialFormData = [
        {
            id: "username",
            name: "username",
            label: "Name",
            placeholder: "John Doe",
            value: formData.username,
            type: "text",
            onChange: handleChange,
            errorMessage: formError.username
        },
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
            id: "contact",
            name: "contact",
            label: "Contact",
            placeholder: "(+91)9876 543 210",
            value: formData.contact,
            type: "number",
            onChange: handleChange,
            errorMessage: formError.contact
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
        },
        {
            id: "confirm_password",
            name: "confirm_password",
            label: "Confirm Password",
            placeholder: "●●●●●●●●●●",
            value: formData.confirm_password,
            type: "password",
            onChange: handleChange,
            errorMessage: formError.confirm_password
        }
    ]

    const handleSubmit = e => {
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

            console.log('formData', formData)

        } catch (error) {
            return error
        }

    }

    return { handleSubmit, initialFormData }
}

export default useSignup