import React from 'react';
import PropTypes from 'prop-types';
import './ActivityCard.scss';

export const ActivityCard = ({ title, description }) => {
    return (
        <div className='s-card'>
            <h2 className='s-card__title'>{title}</h2>
            <p className='s-card__description'>{description}</p>
        </div>
    );
};

ActivityCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
