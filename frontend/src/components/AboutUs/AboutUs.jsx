import React from 'react';
import "./AboutUs.scss"; 
import aboutus from "../../assets/banners/aboutus2.jpg";

const AboutUs = () => {
    return (
        <div class="container">
            <div className="about-us-container">
            <div className="about-us-content">
                <h2>Sobre Nosotros</h2>
                <p>
                    Somos <b>Intervenciones Urbanas</b>, un vivero comprometido con la conservación del medio ambiente y la promoción de la biodiversidad.
                    Nos dedicamos a proporcionar plantas de alta calidad y servicios excepcionales a nuestros clientes.
                </p>
                <h3>Nuestra Misión</h3>
                <p>
                    Nuestra <b>misión</b> es promover la belleza y el bienestar a través de la naturaleza. 
                    Nos esforzamos por ofrecer una amplia variedad de plantas de alta calidad que enriquezcan los espacios vitales de nuestros clientes y contribuyan a la creación de entornos verdes y saludables.
                </p>
                <h3>Nuestros Valores</h3>
                <p>
                    <ul>
                    <li>Compromiso con la calidad y la excelencia.</li>
                    <li>Respeto por la naturaleza y el medio ambiente.</li>
                    <li>Integridad y honestidad en todas nuestras operaciones.</li>
                    <li>Colaboración y trabajo en equipo.</li>
                    <li>Innovación y mejora continua.</li>
                    </ul>
                </p>
                <h3>Nuestro Equipo</h3>
                <p>
                En <b>Intervenciones Urbanas</b>, contamos con un equipo apasionado por la jardinería y cuidado del medio ambiente.
                Nos esforzamos por brindar un servicio personalizado y atención individualizada a cada uno de nuestros clientes.
                </p>
            </div>
            </div>
            <div class="image">
                <img src={aboutus}/>
            </div>
        </div>
    );
};

export default AboutUs;
