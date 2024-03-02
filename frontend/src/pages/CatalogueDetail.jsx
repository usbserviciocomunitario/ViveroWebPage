import BannerImage from "../assets/banners/banner.jpg";
import Banner from "../components/Banner/Banner";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { productService } from "../services/product.service";
import Cookies from "js-cookie";
import ImageCatalogue from "../components/ImageCatalogue/ImageCatalogue";
import CatalogueDetailCharacteristics from "../components/CatalogueDetailCharacteristics/CatalogueDetailCharacteristics";

export default () => {
  const { id } = useParams();
  
  const [productDetails, setProductDetails] = useState(null);

  const getProduct = async () => {
    const token = Cookies.get("token");
    await productService.getProduct(token, id).then((response) => {
      if (response) {
        // console.log(response.data);
        setProductDetails(response.data);
      }
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(productDetails);

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
          {productDetails.product_detail.product_name}
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
          {productDetails.product_detail.product_species}
        </h2>
        {/* <ImageCatalogue images={productDetails.product_img_url} /> */}
        {/* <CatalogueDetailCharacteristics
          characteristics={productDetails}
        /> */}
      </Layout>
    </>
  );
};
