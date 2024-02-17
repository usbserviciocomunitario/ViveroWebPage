import "./AboutUs.scss";
import EmailLogo from "./../../assets/icons/correo.svg";
import InstagramLogo from "./../../assets/icons/instagram.svg";
import WhatsappLogo from "./../../assets/icons/whatsapp.svg";
import LocationLogo from "./../../assets/icons/location.svg";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus__image" style={{ marginTop: "60px" }}>
        
      </div>
      <div className="aboutus__info">
        <h1 className="aboutus__info__title"></h1>
        <h2 className="aboutus__info__subtitle">Sobre Nosotros</h2>
        <p className="aboutus__info__paragraph">
          Somos <b>Intervenciones Urbanas</b>, comprometidos con la
          conservación del medio ambiente y la promoción de la biodiversidad.
          Nos dedicamos a proporcionar plantas de alta calidad y servicios
          excepcionales a nuestros clientes.
        </p>
        <h2 className="aboutus__info__subtitle">Nuestra Misión</h2>
        <p className="aboutus__info__paragraph">
          Nuestra <b>misión</b> es promover la belleza y el bienestar a través
          de la naturaleza. Nos esforzamos por ofrecer una amplia variedad de
          plantas de alta calidad que enriquezcan los espacios vitales de
          nuestros clientes y contribuyan a la creación de entornos verdes y
          saludables.
        </p>
        <h2 className="aboutus__info__subtitle">Nuestro Equipo</h2>
        <p className="aboutus__info__paragraph">
          En <b>Intervenciones Urbanas</b>, contamos con un equipo apasionado
          por la jardinería y cuidado del medio ambiente. Nos esforzamos por
          brindar un servicio personalizado y atención individualizada a cada
          uno de nuestros clientes.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

