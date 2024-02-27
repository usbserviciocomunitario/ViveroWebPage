import { useParams } from "react-router-dom";
import { Talks } from "../utils/dummyTalks"; // Import the Talks array from the dummyTalks.js file
import Banner from "../components/Banner/Banner";
import TalkCharacteristicsComponent from "../components/TalksCharacteristics/TalksCharacteristics";
import Layout from "../components/Layout/Layout";

const ActivityTalksCharacteristics = () => {

    const { id } = useParams();
    const talk = Talks.find((talk) => talk.id === Number(id));

    return (
        <>
        <Layout>
            <Banner
            title={talk.name}
            subtitle={talk.category}
            image={talk.image}
            />
            <TalkCharacteristicsComponent/>
        </Layout>
        </>
    );
};

export default ActivityTalksCharacteristics;