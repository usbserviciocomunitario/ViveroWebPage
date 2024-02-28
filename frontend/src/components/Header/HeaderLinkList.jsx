import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";

export default ({ links, active, handler }) => {
  const fullName = localStorage.getItem("fullName");

  const handleLogout = () => {
    localStorage.removeItem("fullName");
    localStorage.removeItem("role");
    Cookies.remove("token");
    setAnchorEl(null);
    window.location.reload();
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ul>
      {links.map((link) => {
        const linkKey = `nav-link-${link.name}`;
        return (
          <li
            key={linkKey}
            id={linkKey}
            className={`${active === linkKey ? "active" : ""}`}
            onClick={(event) => {
              handler(event.target.id);
            }}
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
      {fullName && (
        <>
          <Button
            style={{
              textTransform: "none",
              color: "#3f8880",
              fontWeight: "bold",
              top: -8,
            }}
            onClick={handleClick}
          >
            Hola, {fullName}
          </Button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
          </Menu>
        </>
      )}
    </ul>
  );
};
