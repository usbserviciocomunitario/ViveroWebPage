import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCatalogue.scss';

export default function ImageCatalogue({ images }) {
  const [imagesList, setImagesList] = useState(images);

  useEffect(() => {
    setImagesList(images);
  }, [images]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {imagesList.map((image, index) => (
          <div key={index} style={{ margin: '100px' }}>
            <img src={image} alt={`slide-${index}`}  style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

