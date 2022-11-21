import { Link } from "react-router-dom";

function Shark(props) {
  const { name, scientificName, image, id } = props;

  return (
    <div className="shark-card">
      <Link to={`/info/${id}`}>
        <img className="shark-image" src={`/images/${image}`} alt={name} />
        <div className="shark-name">
          <h1 className="text-3xl">{name}</h1>
          <p className="text-sm md:text-md italic">{scientificName}</p>
        </div>
      </Link>
    </div>
  );
}
export default Shark;
