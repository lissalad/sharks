import { Link } from "react-router-dom";

function Shark(props) {
  const { name, scientificName, image, id } = props;

  return (
    <div className="relative group ">
      <Link to={`/info/${id}`}>
        <img className="shark-cell " src={`/images/${image}`} alt={name} />
        <div className="flex flex-row items-center space-x-3 absolute py-2 px-3 flex-wrap bottom-0 text-xl w-full bg-gray-900/40 backdrop-blur-lg md:hidden group-hover:flex transition-all duration-300">
          <h1 className="text-3xl">{name}</h1>
          <p className="text-sm italic">{scientificName}</p>
        </div>
      </Link>
    </div>
  );
}
export default Shark;
