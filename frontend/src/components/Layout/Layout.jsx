import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";
import PersonIcon from "@mui/icons-material/Person";

export default ({ children }) => {
  const [selected, setSelected] = useState("");
  const handleSelection = (selection) => setSelected(selection);

  const navigation = [
    { name: "Inicio", path: "/" },
    { name: "Tienda", path: "/catalogo" },
    { name: "Actividades", path: "/actividades" },
    { name: "Acerca de nosotros", path: "/acercadenosotros" },
    { name: "Contacto", path: "/contacto" },
    { path: "/login", icon: <PersonIcon /> },
  ];

  const socials = [
    { name: "whatsapp", link: "" },
    { name: "tiktok", link: "" },
    { name: "instagram", link: "" },
    { name: "mail", link: "" },
  ];

  return (
    <div className="layout">
      <Header
        navigation={navigation}
        selected={selected}
        handleSelection={handleSelection}
      />
      <main>{children}</main>
      <Footer
        links={navigation}
        active={selected}
        socials={socials}
        handler={handleSelection}
      />
    </div>
  );
};
