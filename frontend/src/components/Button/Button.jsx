import React from 'react'
import PropTypes from 'prop-types'
import * as Icons from '@tabler/icons-react'
import './Button.scss'

export const CircleButton = ({ iconName, onClick, color, size = 24, customStyle }) => {
    const IconComponent = Icons[iconName];
    return (
        <button className={`circle-button ${color}`} onClick={onClick} style={customStyle}>
            {iconName && <IconComponent size={size} color={color === "tertiary" ? "#000" : "#FFF"} />}
        </button>
    )
}

export const Button = ({ children, iconName, onClick, color, size = 24, customStyle }) => {
    const IconComponent = Icons[iconName];
    return (
        <button className={`button ${color}`} onClick={onClick} style={customStyle} >
            {iconName && <IconComponent size={size} color={color === "tertiary" ? "#000" : "#FFF"} />}
            <span className='button__content'>{children}</span>
        </button>
    )
}

CircleButton.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    size: PropTypes.number
}