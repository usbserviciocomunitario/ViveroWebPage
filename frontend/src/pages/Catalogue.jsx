import BannerImage from "../assets/banners/banner.jpg";
import Banner from "../components/Banner/Banner";
import { CatalogueList } from "../components/CatalogueList/CatalogueList";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import { Product, Category } from "../utils/dummyProducts";

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <Banner
          title="CATÁLOGO"
          image={BannerImage}
          compact={true}
        />
        <CatalogueList
          categories={Category}
          products={Product}
          handleNavigation={(id) => navigate(`${id}`)}
        />
      </Layout>
    </>
  );
};
