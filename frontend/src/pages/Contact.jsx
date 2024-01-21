import Banner from "../components/Banner/Banner";
import BannerImage from "../assets/banners/banner.jpg";
import ContactTemplate from './../components/ContactTemplate/ContactTemplate';

const Contact = () => {
    return (
        <>
            <Banner title="ENCUÉNTRANOS"
                subtitle="ESTAMOS PARA TI EN TODO MOMENTO" 
                image={BannerImage}
            />
            <ContactTemplate />
        </>
    );
}

export default Contact;
