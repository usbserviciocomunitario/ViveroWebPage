import { NavLink } from "react-router-dom";
import "./RecyclingCarouselCard.scss"

export default (props) => {
  const truncate = (text, maxLength) => {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <div className="product-card__container">
      <div
        className="product-card__image"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>

      <div className="product-card__content">
        <p className="product-card__content-title">{props.title}</p>
        <p className="product-card__content-category">{props.category}</p>

        <p className="product-card__content-description">
          {truncate(props.description, 100)}
        </p>

        <div className="product-card__action">
          <NavLink
            to={`/curso/${props.itemId}`}
            className="product-card__action-button"
          >
            Ver más
          </NavLink>
        </div>
      </div>
    </div>
  );
};
