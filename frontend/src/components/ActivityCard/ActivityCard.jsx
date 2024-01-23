import React from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
// import {IconButton } from "@mui/material";
// import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import './ActivityCard.scss';

export const ActivityCard = ({ title, description }) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/actividades/${title}`);
    };

    return (
        <div className='s-card'>
            {/* <div className='s-card__icon'>
                <IconButton>
                    <VolunteerActivismIcon  />
                </IconButton>
            </div> */}
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
