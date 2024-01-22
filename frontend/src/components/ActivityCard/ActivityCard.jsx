import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import './ActivityCard.scss';

export const ActivityCard = ({ title, description }) => {
    const handleButtonClick = () => {
        window.location.replace('/actividades/siembra');
    };

    return (
        <div className='s-card'>
            <h2 className='s-card__title'>{title}</h2>
            <p className='s-card__description'>{description}</p>
            <Button children="Ver más" color="primary" onClick={handleButtonClick} />
        </div>
    );
};

ActivityCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
