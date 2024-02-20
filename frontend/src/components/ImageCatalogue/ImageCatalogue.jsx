import React, { useState, useEffect } from 'react';
import './ImageCatalogue.scss';

export default function ImageCatalogue({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div className="image-catalogue">
      <div className="image-list">
        {images.map((image, index) => (
          <div className="image-card" key={index}>
            <img
              src={image}
              alt={`product-${index}`}
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>
      <div className="image-preview">
        <img src={selectedImage} alt="selected" />
      </div>
    </div>
  );
}
