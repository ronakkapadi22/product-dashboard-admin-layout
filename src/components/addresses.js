import { useState } from 'react'
import { validation } from '../utils/validation'

const initialState = {
    shipping_name: null,
    contact_number: null,
    country: null,
    landmark: null,
    type_of_address: null,
    area: null,
    address_line_1: null,
    city: null,
    state: null,
    pin_code: null,
    isDefaultShipping: false
}

const useAddresses = (data) => {

    const [addressData, setAddressData] = useState({ ...initialState })
    const [formError, setFormError] = useState({ ...initialState })

    const handleChange = e => {
        const { name, value, checked, type } = e.target
        setAddressData({
            ...setAddressData, [name]: value,
            isDefaultShipping: (type === "radio") ? checked : null
        })
        setFormError({ ...formError, [name]: validation(name, value) })
    }

    const addressFormData = [
        {
            id: "_id",
            label: "Shipping name",
            placeholder: "John Doe",
            name: "shipping_name",
            type: "text",
            value: addressData.shipping_name,
            onChange: handleChange,
            errorMessage: formError.shipping_name
        }
    ]

    const handleSubmit = e => {
        e.preventDefault()
        try {
            console.log('addressData', addressData)
        } catch (error) {
            return error
        }
    }

    const addresses = [
        {
            shipping_name: 'Mayur Kapadi',
            contact_number: '9714170940',
            country: 'India',
            landmark: 'L.J. College',
            type_of_address: 'Office',
            area: 'Sanand Circle',
            address_line_1: 'A-706, Savvy Strata',
            city: 'Ahmedabad',
            state: 'Gujarat',
            pin_code: 380001,
            isDefaultShipping: false
        },
        {
            shipping_name: 'Ronak Kapadi',
            contact_number: '9714170940',
            country: 'India',
            landmark: 'L.J. College',
            type_of_address: 'Home',
            area: 'Visavdar',
            address_line_1: "Block no. 19, Near Ramji-Mandir, Sukhpur (Visavdar)",
            city: 'Junagadh',
            state: 'Gujarat',
            pin_code: 362130,
            isDefaultShipping: true
        }
    ]

    return { addressFormData, handleSubmit, addresses }
}

export default useAddresses