import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../common/Forms/Button'
import Form from '../common/Forms/Form'
import Input from '../common/Forms/Input'
import useSignup from '../components/signup'

const Signup = ({ ...props }) => {
    const { handleSubmit, initialFormData } = useSignup()
    return (
        <section {...props} className="relative flex h-screen">
            <div className="w-full bg-white h-full max-md:hidden bg-indigo-50 flex justify-center items-center">
                <img
                    alt="login_img"
                    className="animate-bounce-slow md:w-[340px] lg:w-[450px] xl:w-[620px] 2xl:w-[635px]"
                    src="./assets/register.svg"
                />
            </div>
            <div className="w-full h-full px-6 sm:p-0 md:p-2 lg:p-6 xl:p-8 2xl:p-0 flex justify-center items-center">
                <div className="container">
                    {/* <h1 className='text-center title-font font-medium text-3xl text-indigo-500 mb-3' >Register</h1> */}
                    <img
                        src="./assets/welcome.svg"
                        alt="welcome"
                        className="mx-auto w-[150px] mb-4 sm:mb-4 sm:w-[175px] md:w-[200px] md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-8 sm:mb-12 lg:w-[230px] xl:w-[170px] 2xl:w-[180px]"
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
                        <Button
                            className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            type="submit"
                            label="Signup"
                        />
                        <p className="text-sm text-center font-semibold mt-2 pt-1 mb-0">
                            Already have an account?
                            <span className="ml-1 text-indigo-500 hover:text-indigo-700 focus:text-indigo-700 transition duration-200 ease-in-out cursor-pointer">
                                <NavLink to="/login" >Login</NavLink>
                            </span>
                        </p>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default Signup