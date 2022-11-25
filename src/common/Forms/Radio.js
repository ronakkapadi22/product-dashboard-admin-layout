import React from 'react'

const Radio = ({label, id, name, type, ...props }) => {
    return (
        <div {...props} >
            <input {...{id, name, type}} className="rounded h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            {label ? <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                {label}
            </label> : null}
        </div>
    )
}

export default Radio