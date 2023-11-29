import React from 'react';
import "./ActivityPage.scss";
import { CardInfo } from '../cardIcons';
import { ActivityCard } from '../ActivityCard';

export const ActivityPage = () => {
    return (
        <>
            <div className='card-group'>
                {CardInfo.map(card => (
                    <ActivityCard title={card.title} description={card.description} icon={card.icon} key={card.title} />
                ))}
            </div>
        </>
    )
}
