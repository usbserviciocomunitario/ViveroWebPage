import { useParams } from "react-router-dom";
import { RecyclingDay } from "../utils/dummyRecycling"; // Import the Talks array from the dummyTalks.js file
import Banner from "../components/Banner/Banner";
import RecyclingCharacteristicsComponent from "../components/RecyclingCharacteristics/RecyclingCharacteristics";
import Layout from "../components/Layout/Layout";

const ActivityRecyclingCharacteristics = () => {

    const { id } = useParams();
    const recycling = RecyclingDay.find((recycling) => recycling.id === Number(id));

    return (
        <>
        <Layout>
            <Banner
            title={recycling.name}
            subtitle={recycling.category}
            image={recycling.image}
            />
            <RecyclingCharacteristicsComponent/>
        </Layout>
        </>
    );
};

export default ActivityRecyclingCharacteristics;