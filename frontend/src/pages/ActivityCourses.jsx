import BannerImage from "../assets/banners/banner.jpg";
import Banner from "../components/Banner/Banner";
import {CourseList } from "../components/CourseList/CourseList";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import { Courses, Category } from "../utils/dummyCourses";

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <Banner
          title="CURSOS"
          image={BannerImage}
          compact={true}
        />
        <CourseList
          categories={Category}
          products={Courses}
          handleNavigation={(id) => navigate(`${id}`)}
        />
      </Layout>
    </>
  );
};
