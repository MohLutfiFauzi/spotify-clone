import React from 'react'
import classNames from 'classnames'

const HrAndOr = ({ className }) => {
    return (
        <div className={classNames(`flex ${className} justify-between`)}>
            <hr className='w-5/12' />
            <span className='text-xs font-bold mx-1'>ATAU</span>
            <hr className='w-5/12' />
        </div >
    )
}

export default HrAndOr