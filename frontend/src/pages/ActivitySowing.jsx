import BannerImage from "../assets/banners/banner.jpg";
import Banner from "../components/Banner/Banner";
import {SowingList } from "../components/SowingList/SowingList";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import { Sowings, Category } from "../utils/dummySowing";

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <Banner
          title="Siembra a tu medida"
          image={BannerImage}
          compact={true}
        />
        <SowingList
          categories={Category}
          products={Sowings}
          handleNavigation={(id) => navigate(`${id}`)}
        />
      </Layout>
    </>
  );
};
