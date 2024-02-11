import React, { useState } from "react";
import HeaderLinkList from "../Header/HeaderLinkList";
import MenuIcon from "./MenuIcon";
import "./Topbar.scss";

export default (props) => {
  const [visibility, setVisibility] = useState(false);
  const handleVisibility = () => setVisibility(() => !visibility);

  return (
    <header className="header header__topbar">
      <nav className={`header__content ${visibility ? "visible" : ""}`}>
        <HeaderLinkList
          links={props.links}
          active={props.active}
          handler={props.handler}
        />
      </nav>

      <nav className="header__base">
        <MenuIcon mode={visibility} callback={handleVisibility} />
        <div className="header__logo-container">{props.children}</div>
      </nav>
    </header>
  );
};
