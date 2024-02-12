import Banner from "../components/Banner/Banner";
import Layout from "../components/Layout/Layout";
import TalksCarousel from "../components/TalksCarousel/TalksCarousel";
import { Talks } from "../utils/dummyTalks";

export default function ActivityTalks() {
  const talks = Talks;
  
    return (
      <>
        <Layout>
          <Banner

                  title="CHARLAS"
                  subtitle="TODO A TU ALCANCE"
          />
          <TalksCarousel product={talks} />
        </Layout>
      </>
    )
  }
