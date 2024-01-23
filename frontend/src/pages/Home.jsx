import ContactSection from "../components/ContactSection/ContactSection";
import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.jpg";
import ActivitySection from "../components/ActivitySection/ActivitySection";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";

import { Product } from "../utils/dummyProducts";

export default function Home() {
  const product = Product;

  return (
    <>
      <Banner
        image={BannerImage}
        title="INTERVENCIONES URBANAS"
        subtitle="TODO A TU ALCANCE"
      />
      <ProductCarousel product={product} />
      <ActivitySection />
      <ContactSection />
    </>
  );
}
