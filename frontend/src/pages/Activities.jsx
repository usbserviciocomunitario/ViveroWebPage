import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.jpg";
import { ActivityPage } from "../components/ActivityCard/ActivityPage/ActivityPage";
import Layout from "../components/Layout/Layout";

export default function Activities() {
    return (
      <>
        <Layout>
          <Banner image={BannerImage} title="ACTIVIDADES" compact={true} />
          <ActivityPage />
        </Layout>
      </>
    )
}
