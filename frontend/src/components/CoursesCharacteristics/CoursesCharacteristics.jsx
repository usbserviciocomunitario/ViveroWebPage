import "./CoursesCharacteristics.scss";
import { useParams } from "react-router-dom";
import { Courses } from "../../utils/dummyCourses"; // Import the Talks array from the dummyTalks.js file

const CoursesCharacteristics= () => {

  const { id } = useParams();
  const course = Courses.find((course) => course.id === Number(id));

  return (
    <div className="coursecharacteristics">
      <div className="coursecharacteristics__image" style={{ marginTop: "60px" }}>
        
      </div>
      <div className="coursecharacteristics__info">
        <h1 className="coursecharacteristics__info__title"></h1>
        <h2 className="coursecharacteristics__info__subtitle">Introducción</h2>

        <p className="coursecharacteristics__info__paragraph">
        El <b>{course.category}</b>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsum consequatur exercitationem minus mollitia veniam, nobis eius voluptatibus. Veniam nobis ad eius adipisci deleniti repudiandae quae natus corporis sed aut! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum libero est architecto voluptas dolorum? Fugit qui labore cupiditate magnam unde quas sed sunt perferendis commodi velit? Recusandae eius pariatur rerum.
        </p>
        <h2 className="coursecharacteristics__info__subtitle">Temas Principales a Abordar</h2>

        <p className="coursecharacteristics__info__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorem reprehenderit iusto fugit exercitationem officiis at animi optio. Qui eaque libero 
        <br />
        <br />
        <li>
            Topico 1
        </li>
        <li>
            Topico 2
        </li>
        <li>
            Topico 3
        </li>
        <li>
            Topico 4
        </li>
        </p>


      </div>
    </div>
  );
};

export default CoursesCharacteristics;

