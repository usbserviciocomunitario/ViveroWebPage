import Banner from "../components/Banner/Banner";
import Layout from "../components/Layout/Layout";
import RecyclingCarousel from "../components/RecyclingCarousel/RecyclingCarousel";
import { RecyclingDay } from "../utils/dummyRecycling";
import BannerImage from "../assets/banners/banner.jpg";


export default function ActivityRecycling() {
  const recyclingDay = RecyclingDay;
  
    return (
      <>
        <Layout>
          <Banner
            title="JORNADAS DE RECICLAJE"
            image={BannerImage}
            compact={true}
          />
          <RecyclingCarousel product={recyclingDay} />
        </Layout>
      </>
    )
  }
