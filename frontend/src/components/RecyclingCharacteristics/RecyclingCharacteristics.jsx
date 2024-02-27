import "./RecyclingCharacteristics.scss";
import { useParams } from "react-router-dom";
import { RecyclingDay } from "../../utils/dummyRecycling"; // Import the Talks array from the dummyTalks.js file

const RecyclingCharacteristics= () => {

  const { id } = useParams();
  const recycling = RecyclingDay.find((recycling) => recycling.id === Number(id));

  return (
    <div className="recyclingcharacteristics">
      <div className="recyclingcharacteristics__image" style={{ marginTop: "60px" }}>
        
      </div>
      <div className="recyclingcharacteristics__info">
        <h1 className="recyclingcharacteristics__info__title"></h1>
        <h2 className="recyclingcharacteristics__info__subtitle">Introducción</h2>
        <p className="recyclingcharacteristics__info__paragraph">
        <b>{recycling.category}</b>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsum consequatur exercitationem minus mollitia veniam, nobis eius voluptatibus. Veniam nobis ad eius adipisci deleniti repudiandae quae natus corporis sed aut! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum libero est architecto voluptas dolorum? Fugit qui labore cupiditate magnam unde quas sed sunt perferendis commodi velit? Recusandae eius pariatur rerum.
        </p>
        <h2 className="recyclingcharacteristics__info__subtitle">Temas Principales a Abordar</h2>
        <p className="recyclingcharacteristics__info__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolorem reprehenderit iusto fugit exercitationem officiis at animi optio. Qui eaque libero quaerat omnis, a est fugit delectus nihil. Similique, quibusdam?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tempora ad molestiae nostrum temporibus deleniti neque quod, odit odio veritatis, maiores eligendi. Recusandae est dolorum blanditiis consectetur possimus, consequuntur libero.
        </p>

      </div>

    </div>
  );
};

export default RecyclingCharacteristics;

