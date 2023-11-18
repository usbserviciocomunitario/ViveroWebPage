import { NavLink } from "react-router-dom";

export default ({ links, active, handler }) => {
    return (
        <ul>
            {links.map(link => {
            const linkKey = `nav-link-${link.name}`;
            return (
                <li
                key={linkKey}
                id={linkKey}
                className={`${(active === linkKey) ? "active" : ""}`} 
                onClick={event => handler(event.target.id)}>
                <NavLink to={link.path}>{link.name}</NavLink>
                </li>
            );
            })}
        </ul>
    );
}