import BannerImage from "../assets/banners/banner.jpg";
import Banner from "../components/Banner/Banner";
import { useEffect, useState } from "react";
import CatalogueDetailCharacteristics from "../components/CatalogueDetailCharacteristics/CatalogueDetailCharacteristics";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { Product } from "../utils/dummyProducts";
import ImageCatalogue from "../components/ImageCatalogue/ImageCatalogue";

export default () => {
    const { id } = useParams();
    const idNumber = Number(id);
    
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const productSeleccionado = Product.find((product) => product.id === idNumber);
        setProductDetails(productSeleccionado);
    }, [id]);

    if (!productDetails) {
        return 'Cargando...';
    }

    return (
        <>
            <Layout>
            <Banner image={BannerImage}
                title={productDetails.name}
                subtitle={productDetails.category}
                compact={true}
            />
            <ImageCatalogue images={productDetails.images}/>
            <CatalogueDetailCharacteristics characteristics={productDetails.characteristics }/>
            </Layout>
        </>
    );
}

