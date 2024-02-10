import { NavLink } from "react-router-dom";
import React from "react";

export default ({ links, active, handler }) => {
  return (
    <ul>
      {links.map((link) => {
        const linkKey = `nav-link-${link.name}`;
        return (
          <li
            key={linkKey}
            id={linkKey}
            className={`${active === linkKey ? "active" : ""}`}
            onClick={(event) => handler(event.target.id)}
          >
            <NavLink
              to={link.path}
              style={{ display: "flex", alignItems: "center" }}
            >
              {link.name}{" "}
              {link.icon &&
                React.cloneElement(link.icon, {
                  style: { fontSize: 30, position: "relative", top: -6 },
                })}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
