import React from 'react'

function Input({label, name, inputType, value, placeholder, handleInputChange}) {
    return (
        <div>
            <label className='label' htmlFor={label}> {label} </label>

            <input
                name={name}
                id={name}
                type={inputType}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input