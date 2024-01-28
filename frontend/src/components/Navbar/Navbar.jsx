import React from "react";
import HeaderLinkList from "../Header/HeaderLinkList";
import "./Navbar.scss";
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default (props) => {

    const navigate = useNavigate();

    return (
      <header className="header header__navbar">
          <nav className="header__content">
            {props.children}
            <div className="header__left-side">
              <HeaderLinkList links={props.links} active={props.active}
                handler={props.handler}/>
            </div>
          </nav>
          <div className="header__right-side">
            <NavLink to="/login">
              <IconButton style={{ verticalAlign: "middle" }}>
                <PersonIcon />
              </IconButton>
            </NavLink >
            <button 
              onClick={() => navigate("/signup")}
              style={{
                backgroundColor: "white",
                color: "#3f8880",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "15px",
                fontStyle: "italic",
                verticalAlign: "middle",
              }}
            >
              Registrarse
            </button>
          </div>
      </header>
    );
}