import React from "react";
import { Lightbox } from "react-modal-image";

export const ImageModal = ({ image, closeAction }) => {
  return (
    <>
      <Lightbox
        medium={image}
        onClose={() => closeAction(false)}
        alt={"Imagen"}
      />
    </>
  );
};
