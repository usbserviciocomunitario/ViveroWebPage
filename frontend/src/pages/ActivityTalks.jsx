import Banner from "../components/Banner/Banner";
import Layout from "../components/Layout/Layout";
import TalksCarousel from "../components/TalksCarousel/TalksCarousel";
import { Talks } from "../utils/dummyTalks";
import BannerImage from "../assets/banners/banner.jpg";


export default function ActivityTalks() {
  const talks = Talks;
  
    return (
      <>
        <Layout>
          <Banner
            title="CHARLAS"
            image={BannerImage}
            compact={true}
          />
          <TalksCarousel product={talks} />
        </Layout>
      </>
    )
  }