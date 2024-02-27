import { useParams } from "react-router-dom";
import { Sowings } from "../utils/dummySowing"; // Import the Talks array from the dummyTalks.js file
import Banner from "../components/Banner/Banner";
import SowingCharacteristicsComponent from "../components/SowingCharacteristics/SowingCharacteristics";
import Layout from "../components/Layout/Layout";

const ActivitySowingCharacteristics = () => {

    const { id } = useParams();
    const sowing = Sowings.find((sowing) => sowing.id === Number(id));

    return (
        <>
        <Layout>
            <Banner
            title={sowing.name}
            subtitle={sowing.category}
            image={sowing.image}
            />
            <SowingCharacteristicsComponent/>
        </Layout>
        </>
    );
};

export default ActivitySowingCharacteristics;