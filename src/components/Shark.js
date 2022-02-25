import { Link } from "react-router-dom";

function Shark(props) {
  const { name, scientificName, image, id } = props;
  // const name = "Blue Shark";
  // const scientificName = "Prionace Glauca";
  // const image = "blue.png";
  // console.log(image)

  return (
    <div className="relative text-transparent bg-transparent group m-3">
      <Link to={`/info/${id}`}>
        <img className="w-96" src={`/images/${image}`} alt={name} />
        <div className="flex flex-row items-center justify-between w-full group-hover:text-white group-hover:bg-black/70 absolute py-2 px-3 text-xl bottom-0 text-left">
          <p>{name}</p>
          <p className="text-xs group-hover:text-white/80 whitespace-nowrap md:text-sm ">
            {scientificName}
          </p>
        </div>
      </Link>
    </div>
  );
}
export default Shark;
