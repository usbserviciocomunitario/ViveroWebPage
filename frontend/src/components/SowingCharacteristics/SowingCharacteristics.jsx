import "./SowingCharacteristics.scss";
import { useParams } from "react-router-dom";
import { Sowings } from "../../utils/dummySowing"; // Import the Talks array from the dummyTalks.js file

const SowingCharacteristics= () => {

  const { id } = useParams();
  const sowing = Sowings.find((sowing) => sowing.id === Number(id));

  const imageStyle = {
    marginTop: "60px",
    backgroundImage: `url(${ sowing.image })`,
  };

  return (
    <div className="sowingcharacteristics">
      <div className="sowingcharacteristics__image" style={imageStyle}>
        
      </div>
      <div className="sowingcharacteristics__info">
        <h1 className="sowingcharacteristics__info__title"></h1>
        <h2 className="sowingcharacteristics__info__subtitle"><b>{sowing.name}</b></h2>

        <p className="sowingcharacteristics__info__paragraph">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsum consequatur exercitationem minus mollitia veniam, nobis eius voluptatibus. Veniam nobis ad eius adipisci deleniti repudiandae quae natus corporis sed aut! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum libero est architecto voluptas dolorum? Fugit qui labore cupiditate magnam unde quas sed sunt perferendis commodi velit? Recusandae eius pariatur rerum.
        </p>
        <h2 className="sowingcharacteristics__info__subtitle">Temas Principales a Abordar</h2>

        <p className="sowingcharacteristics__info__paragraph">
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

export default SowingCharacteristics;

