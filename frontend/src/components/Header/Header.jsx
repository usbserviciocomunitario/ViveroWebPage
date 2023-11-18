import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar/Topbar";
import Logo from "../../assets/banners/Logo.jpg";
import "./Header.scss";

export default (props) => {
  return (
    <header className="header__fixed">
      <Navbar links={props.navigation}
        active={props.selected} handler={props.handleSelection}>
         <LogoNavLink {...props} />
      </Navbar>
      <Topbar links={props.navigation}
        active={props.selected} handler={props.handleSelection}>
         <LogoNavLink {...props} />
      </Topbar>
    </header>
  );
}

const LogoNavLink = (props) => {
  return (
    <NavLink to="/">
      <img
        onClick={() => props.handleSelection("")}
        className="header__logo" src={Logo}
      />
    </NavLink>
  );
}