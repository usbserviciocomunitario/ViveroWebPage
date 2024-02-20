import BannerImage from "../assets/banners/banner.jpg";
import Banner from "../components/Banner/Banner";
import { useEffect, useState } from "react";
import CatalogueDetailCharacteristics from "../components/CatalogueDetailCharacteristics/CatalogueDetailCharacteristics";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { Product } from "../utils/dummyProducts";
import ImageCatalogue from "../components/ImageCatalogue/ImageCatalogue";

export default () => {
  const { id } = useParams();
  const idNumber = Number(id);

  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const productSeleccionado = Product.find(
      (product) => product.id === idNumber
    );
    setProductDetails(productSeleccionado);
  }, [id]);

  if (!productDetails) {
    return "Cargando...";
  }

  return (
    <>
      <Layout>
        <Banner
          image={BannerImage}
          // title={productDetails.name}
          // subtitle={productDetails.category}
          compact={true}
        />
        <h1
          style={{
            textAlign: "center",
            color: "black",
            marginTop: "20px",
            marginLeft: "350px",
            fontStyle: "italic",
            fontSize: "3rem",
          }}
        >
          {productDetails.name}
        </h1>
        <h2
          style={{
            textAlign: "center",
            color: "black",
            marginLeft: "350px",
            marginTop: "-20px",
            fontStyle: "italic",
            fontSize: "2rem",
          }}
        >
          {productDetails.category}
        </h2>
        <ImageCatalogue images={productDetails.images} />
        <CatalogueDetailCharacteristics
          characteristics={productDetails.characteristics}
        />
      </Layout>
    </>
  );
};
