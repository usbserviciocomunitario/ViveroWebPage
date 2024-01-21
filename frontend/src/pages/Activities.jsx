import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.jpg";
import { ActivityPage } from "../components/ActivityCard/ActivityPage/ActivityPage";

export default function Activities() {
    return (
      <>
        <Banner image={BannerImage} title="ACTIVIDADES" compact={true} />
        <ActivityPage />
      </>
    )
}
