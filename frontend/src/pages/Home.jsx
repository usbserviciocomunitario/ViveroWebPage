import ContactSection from '../components/ContactSection/ContactSection';
import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.jpg";
import ActivitySection from '../components/ActivitySection/ActivitySection';

export default function Home() {
    return (
      <>
        <Banner
                image={BannerImage}
                title="INTERVENCIONES URBANAS"
                subtitle="TODO A TU ALCANCE"
        />
        <ActivitySection />
        <ContactSection />

      </>
    )
  }
