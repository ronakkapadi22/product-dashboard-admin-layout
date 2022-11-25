import React from 'react'
import errorImage from "../assets/not_found.svg"

const NotFound = ({ ...props }) => {
    return (
        <div className='flex items-center w-full h-screen justify-center' {...props}>
            <img
                className='animate-pulse w-3/5 2xl:w-2/5 lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-3/5'
                alt='not-found'
                src={errorImage} />
        </div>
    )
}

export default NotFound