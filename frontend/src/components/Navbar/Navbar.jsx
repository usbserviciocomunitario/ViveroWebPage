import React from "react";
import HeaderLinkList from "../Header/HeaderLinkList";
import "./Navbar.scss";

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
      </header>
    );
}