import { Link } from "react-router-dom";

function Shark(props) {
  const { name, scientificName, image, id } = props;
  // const name = "Blue Shark";
  // const scientificName = "Prionace Glauca";
  // const image = "blue.png";
  // console.log(image)

  return (
        <div className="relative  group mb-2  md:m-3">
    <Link to={`/info/${id}`}>
        <img className="w-96" src={`/images/${image}`} alt={name} />
        <div className="flex md:invisible md:group-hover:visible flex-row items-center bg-black/70 justify-between w-full text-white absolute py-2 px-3 text-xl bottom-0 text-left">
          <h1>{name}</h1>
          <p className="text-xs group-hover:text-white/80 whitespace-nowrap md:text-sm ">
            {scientificName}
          </p>
        </div>
      </Link>
    </div>
  );
}
export default Shark;
