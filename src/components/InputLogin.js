import React from 'react'
import PropTypes from 'prop-types'

const InputLogin = ({ type, placeholder }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} className='w-full h-12 border border-[#878787] rounded-md py-6 px-3 hover:border-slate-900' />
        </>
    )
}

InputLogin.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string
}

export default InputLogin