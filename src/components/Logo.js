import React from 'react'
import spotifyBlackLogo from '../img/spotify-black-logo.png'
import PropTypes from 'prop-types'

const Logo = ({ className }) => {
    return (
        <img className={className} src={spotifyBlackLogo} alt="logo spotify black" />
    )
}

Logo.propTypes = {
    className: PropTypes.string.isRequired,
}

export default Logo