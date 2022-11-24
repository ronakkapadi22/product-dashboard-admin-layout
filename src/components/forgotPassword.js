import { useState } from 'react'
import { validation } from '../utils/validation'

const initialState = {
    email : ""
}

const useForgotPassword = (otherData) => {

    const [formData, setFormData] = useState(initialState)
    const [formError, setFormError] = useState(initialState)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: String(value).toLocaleLowerCase() })
        setFormError({ ...formError, [name] : validation(name, value) })
    }

    const initialFormData = [
        {
            id: "email",
            name: "email",
            label: "Email",
            placeholder: "xyz@gmail.com",
            value: formData.email,
            type: "email",
            onChange: handleChange,
            errorMessage: formError.email
        }
    ]

    const handleSubmit = e => {
        e.preventDefault()
        try {
            let error = {}
            Object.keys(formData).forEach(val => {
                const errorMessage = validation(val, formData[val])
                if(errorMessage){
                    error[val] = errorMessage
                }
            })
            if(Object.keys(error).length){
                setFormError(error)
                return
            }
        } catch (error) {
            return error
        }
    }

  return {
    handleSubmit, initialFormData
  }
}

export default useForgotPassword