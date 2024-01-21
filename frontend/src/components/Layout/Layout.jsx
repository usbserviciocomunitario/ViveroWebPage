import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";

export default ({children}) => {

    const [selected, setSelected] = useState("");
    const handleSelection = selection => setSelected(selection);

    const navigation = [
        { name: "Inicio", path: "/" },
        { name: "Tienda", path: "" },
        { name: "Actividades", path: "/actividades" },
        { name: "Acerca de nosotros", path: "" },
        { name: "Contacto", path: "/contacto" }
    ];

    const socials = [
        { name: "whatsapp", link: "" },
        { name: "tiktok", link: "" },
        { name: "instagram", link: "" },
        { name: "mail", link: "" }
    ]

    return (
        <div className="layout">
            <Header navigation={navigation}
                selected={selected} handleSelection={handleSelection} />
            <main>{children}</main>
            <Footer links={navigation} active={selected} socials={socials}
                handler={handleSelection} />
        </div>
    );
}