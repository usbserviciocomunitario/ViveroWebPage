import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.jpg";
import ContactTemplate from "./../components/ContactTemplate/ContactTemplate";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <>
      <Layout>
        <Banner
          title="ENCUÉNTRANOS"
          subtitle="ESTAMOS PARA TI EN TODO MOMENTO"
          image={BannerImage}
        />
        <ContactTemplate />
      </Layout>
    </>
  );
};

export default Contact;
