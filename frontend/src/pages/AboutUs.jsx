import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/aboutus.jpg";
import AboutUsPage from "../components/AboutUs/AboutUs";
import Layout from "../components/Layout/Layout";

const AboutUs = () => {
    return (
        <>
        <Layout>
            <Banner
            title="ACERCA DE NOSOTROS"
            subtitle="VEN Y CONÓCENOS"
            image={BannerImage}
            />
            <AboutUsPage />
        </Layout>
        </>
    );
};

export default AboutUs;