
import { NavLink } from "react-router-dom";
import "./ActivitySection.scss";

import charlas from "../../assets/activities/charlas.jpg"
import siembra from "../../assets/activities/siembra.jpg";
import reciclaje from "../../assets/activities/reciclaje.jpg";
import curso from "../../assets/activities/curso.jpg";

const ActivitySection = () => {
    const activities = [
        {
            image: charlas,
            title: "CHARLAS"
        },
        {
            image: siembra,
            title: "SIEMBRA"
        },
        {
            image: reciclaje,
            title: "RECICLAJE"
        },
        {
            image: curso,
            title: "CURSOS"
        }
    ];

    return (
        <div className="activities-section">
            <h1 className="activities-section__title">ACTIVIDADES</h1>
            <div className="activities-section__container">
                {activities.map((activity) => {
                    return (
                        <NavLink 
                            to="/actividades"
                            key={`activities-section__activity-${activity.title}`}
                            style={{
                                textDecoration: "none",
                            }}>
                        <div
                            className="activities-section__activity"
                            style={{
                                backgroundImage: `url(${activity.image})`
                            }}
                        >
                            <div className="activities-section__activity__layer
                            animate__animated animate__fadeIn animate__slow">
                            </div>
                            <div className="activities-section__activity-title">
                                    {activity.title}
                                </div>
                            </div>
                        </NavLink>
                    );
                })}

            </div>

        </div>
    );
}
export default ActivitySection;
