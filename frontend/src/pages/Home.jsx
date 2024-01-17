import ContactSection from '../components/ContactSection/ContactSection';
import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.jpg";
import ActivitySection from '../components/ActivitySection/ActivitySection';
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";

import planta1 from "../assets/planta1.jpeg";
import planta2 from "../assets/planta2.jpeg";
import planta3 from "../assets/planta3.jpeg";
import planta4 from "../assets/planta4.jpeg";
import planta5 from "../assets/planta5.jpeg";

export default function Home() {

  const product = [
    {
      id: 1,
      name: "Planta 1",
      image: planta1,
      category: "Planta ornamental",
    },
    {
      id: 2,
      name: "Planta 2",
      image: planta2,
      category: "Planta ornamental",
    },
    {
      id: 3,
      name: "Planta 3",
      image: planta3,
      category: "Planta ornamental",
    },
    {
      id: 4,
      name: "Planta 4",
      image: planta4,
      category: "Planta ornamental",
    },
    {
      id: 5,
      name: "Planta 5",
      image: planta5,
      category: "Planta ornamental",
    },
  ];

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
    )
  }
