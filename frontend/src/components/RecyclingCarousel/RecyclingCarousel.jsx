import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RecyclingCarouselCard from "./RecyclingCarouselCard";
import "./RecyclingCarousel.scss";

import { green } from "../../styles/colors.module.scss";

export default ({ product }) => {
  const [productList, setProductList] = useState(product);

  useEffect(() => {
    setProductList(product);
  }, [product]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="product-carousel__title">Jornada</h1>
      <Slider {...settings}>
        {productList.map((product) => {
          return (
            <div key={`slider-${product.id}`}>
              <RecyclingCarouselCard
                itemId={product.id}
                image={product.image}
                title={product.name}
                category={product.category}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus illum adipisci officia rerum explicabo porro commodi similique nobis asperiores quo."
                }
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
};