import React from 'react'
import PropTypes from 'prop-types'

const CheckBoxLogin = ({ children }) => {
    return (
        <label className='flex gap-2 text-xs'>
            <input type='checkbox' className='w-4 h-4 accent-green-600' />
            {children}
        </label>
    )
}

CheckBoxLogin.propTypes = {
    children: PropTypes.string
}

export default CheckBoxLogin