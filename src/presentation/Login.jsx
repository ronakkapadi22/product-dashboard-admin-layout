import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../common/Forms/Button'
import Form from '../common/Forms/Form'
import Input from '../common/Forms/Input'
import useLogin from '../components/login'
import Logo from './Logo'

const Login = ({ ...props }) => {
    const { handleSubmit, initialFormData } = useLogin()
    return (
        <section {...props} className="relative flex h-screen">
            <div className="relative w-full h-full p-6 sm:p-8 md:p-2 lg:p-16 xl:p-16 2xl:p-0 flex justify-center items-center">
                <div className="container">
                    <Logo redirect className="absolute top-[24px] left-[24px] flex justify-center items-center" />
                    <img
                        src="./assets/welcome.svg"
                        alt="welcome"
                        className="mx-auto w-[150px] mb-4 sm:mb-4 sm:w-[175px] md:w-[200px] md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8 sm:mb-12 lg:w-[230px] xl:w-[170px] 2xl:w-[180px]"
                    />
                    <Form
                        className="mx-auto sm:w-[350px] md:w-[340px] lg:w-[400px] xl:w-[400px] 2xl:w-[400px]"
                        {...{ handleSubmit }}
                    >
                        {initialFormData.map(({ id, ...otherData }) => (
                            <Input
                                className="mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"
                                labelClass="leading-7 text-sm text-gray-600"
                                inputClass="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                key={id}
                                {...otherData}
                            />
                        ))}
                        <span className="float-right mb-2 mt-8 text-sm cursor-pointer font-medium">
                            <NavLink to="/forgot-password" >Forgot password?</NavLink>
                        </span>
                        <Button
                            className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            type="submit"
                            label="Login"
                        />
                        <p className="text-sm text-center font-semibold mt-2 pt-1 mb-0">
                            Don't have an account?
                            <span className="ml-1 text-indigo-500 hover:text-indigo-700 focus:text-indigo-700 transition duration-200 ease-in-out cursor-pointer">
                                <NavLink to="/signup" >Register</NavLink>
                            </span>
                        </p>
                    </Form>
                </div>
            </div>
            <div className="w-full bg-white h-full max-md:hidden bg-indigo-50 flex justify-center items-center">
                <img
                    alt="login_img"
                    className="animate-bounce-slow md:w-[340px] lg:w-[450px] xl:w-[620px] 2xl:w-[635px]"
                    src="./assets/festival.svg"
                />
            </div>
        </section>
    )
}

export default Login
