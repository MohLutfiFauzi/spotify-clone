import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

const ButtonLoginWith = ({ className, bgColor, color, children, icon }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 768px)' })
    return (
        <button className={classNames(`${color} ${bgColor} font-bold max-w-full rounded-full tracking-widest py-3 text-sm flex justify-center items-center gap-x-3 border border-[#b9b9b9] hover:border-black ${className} `)}>
            {isTabletOrMobile ? icon : null}
            {children}
        </button>
    )
}

ButtonLoginWith.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.string.isRequired,
}

export default ButtonLoginWith