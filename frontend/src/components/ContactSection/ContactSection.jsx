import { NavLink } from "react-router-dom";
import ContactBanner from "../../assets/banners/vivero.jpg";
import "./ContactSection.scss";

export default () => {
  return (
    <div className="contact-section">
      <div
        className="contact-section__banner"
        style={{
          backgroundImage: `url(${ContactBanner})`,
        }}
      >
        <div className="contact-section__banner-layer"></div>

        <div className="contact-section__title">EN INTERVENCIONES URBANAS</div>
        <div className="contact-section__subtitle">
          Tenemos a tu disposición productos de alta calidad, desarrollados y
          adecuados para todos. <br></br>
          Nuestra pasión por la excelencia nos ha impulsado desde el principio y
          continúa impulsándonos a seguir adelante.<br></br>
          No te conformes con menos: comprueba nuestra calidad.
        </div>
        <NavLink to="/contacto" style={{ textDecoration: "none", zIndex: 1 }}>
          <div className="contact-section__action">CONTÁCTANOS</div>
        </NavLink>
      </div>
    </div>
  );
};
