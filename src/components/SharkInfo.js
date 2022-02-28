import { useParams } from "react-router";
import data from "../shark-data";

function SharkInfo(props) {
  const params = useParams();
  const { id } = params; // Location index
  const { name, scientific_name, image } = data[id];

  return (
    <div className="flex flex-col m-2 md:mx-9 md:my-7 md:flex-row md:justify-evenly">
      <img className="md:w-[500px]" src={`/images/${image}`} alt={name} />
      <div className="flex flex-col mx-4 my-2 md:items-end md:my-9">
        <h1 className="text-3xl md:text-5xl">{name}</h1>
        <h2 className="text-md italic md:my-2 md:mr-9">{scientific_name}</h2>
      </div>
    </div>
  );
}
export default SharkInfo;
