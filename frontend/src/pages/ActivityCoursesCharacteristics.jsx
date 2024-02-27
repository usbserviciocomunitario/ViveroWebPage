import { useParams } from "react-router-dom";
import { Courses } from "../utils/dummyCourses"; // Import the Talks array from the dummyTalks.js file
import Banner from "../components/Banner/Banner";
import CoursesCharacteristicsComponent from "../components/CoursesCharacteristics/CoursesCharacteristics";
import Layout from "../components/Layout/Layout";

const ActivityCoursesCharacteristics = () => {

    const { id } = useParams();
    const course = Courses.find((course) => course.id === Number(id));

    return (
        <>
        <Layout>
            <Banner
            title={course.name}
            subtitle={course.category}
            image={course.image}
            />
            <CoursesCharacteristicsComponent/>
        </Layout>
        </>
    );
};

export default ActivityCoursesCharacteristics;