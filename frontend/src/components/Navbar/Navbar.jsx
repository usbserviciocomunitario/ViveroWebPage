import React from "react";
import HeaderLinkList from "../Header/HeaderLinkList";
import "./Navbar.scss";
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom";

export default (props) => {
    return (
      <header className="header header__navbar">
          <nav className="header__content">
            {props.children}
            <div className="header__left-side">
              <HeaderLinkList links={props.links} active={props.active}
                handler={props.handler}/>
            </div>
          </nav>
          <NavLink to="/login" style={{ marginLeft: 900 }}>
            <IconButton>
              <PersonIcon />
            </IconButton>
          </NavLink>
      </header>
    );
}