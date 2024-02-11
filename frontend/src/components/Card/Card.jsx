import React, { useState } from "react";
import { CircleButton } from "../Button/Button";
import planta1 from "../../assets/planta1.jpeg";
import "./Card.scss";
import { ImageModal } from "../Modal/ImageModal";

export const Card = ({ product, handleNavigation, criteria }) => {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const productImage = planta1;

  return (
    <>
      <div className="card animate__animated animate__fadeIn animate__fast">
        {hover && (
          <div
            className="card__buttons"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <CircleButton
              onClick={() => setShowModal(true)}
              className="card__buttons__button card__buttons__button--expand"
              iconName="IconMaximize"
              color="tertiary"
            />
            <CircleButton
              onClick={() => handleNavigation(product.id)}
              className="card__buttons__button card__buttons__button--details"
              iconName="IconArrowRight"
              color="primary"
            />
          </div>
        )}
        <div
          className="overlay"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        ></div>
        <div className="card__text">
          <h3 className="card__text--title">{product.name.toUpperCase()}</h3>
          <p className="card__text--subtitle">{product[criteria]}</p>
        </div>
        <img
          className="card__image animate__animated animate__fadeIn animate__slow"
          src={productImage}
          alt="moto-image"
        />
      </div>
      {showModal && (
        <ImageModal image={productImage} closeAction={setShowModal} />
      )}
    </>
  );
};
