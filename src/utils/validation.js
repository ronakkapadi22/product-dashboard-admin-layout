import { emailRegex } from "../constant"

export const validation = (name, value) => {
    switch (name) {
        case 'username':
            if (!value || !value.trim() === "") {
                return "Name is required."
            } else return null
        case 'contact':
            if (!value || !value.trim() === "") {
                return "Contact is required."
            } else return null
        case 'email':
            if (!value || !value.trim() === "") {
                return "Email is required."
            } else if (!emailRegex.test(value)) {
                return "Invalid email address."
            } else return null
        case 'password':
            if (!value || !value.trim() === "") {
                return "Password is required."
            } else if (value.length < 8 || value.length > 16) {
                return "Password must be 8-16 characters."
            } else return null
        case 'confirm_password':
            if (!value || !value.trim() === "") {
                return "Confirm password is required."
            } else if (value.length < 8 || value.length > 16) {
                return "Confirm password must be 8-16 characters."
            } else return null
        default: return null
    }
}