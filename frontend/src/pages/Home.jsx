import React, { useState, useEffect } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.jpg";
import ActivitySection from "../components/ActivitySection/ActivitySection";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import Cookies from "js-cookie";

import Layout from "../components/Layout/Layout";
import { productService } from "../services/product.service";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const token = Cookies.get("token");
    await productService.getProducts(token).then((response) => {
      if (response) {
        // console.log(response);
        setProducts(response.data);
      }
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Layout>
        <Banner
          image={BannerImage}
          title="INTERVENCIONES URBANAS"
          subtitle="TODO A TU ALCANCE"
        />
        <ProductCarousel product={products} />

        <ActivitySection />
        <ContactSection />
      </Layout>
    </>
  );
}
