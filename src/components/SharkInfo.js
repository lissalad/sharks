import { useParams } from "react-router";
import data from "../shark-data";

function SharkInfo(props) {
  const params = useParams();
  const { id } = params; // Location index
  const { name, scientific_name, image, teeth, size, habitat, prey } = data[id];
  const info = "font-bold";

  return (
    <div className="flex flex-col mt-28 m-2 md:mx-9 md:my-12 md:flex-row md:justify-center md:space-x-5">
      <img className="md:w-[500px]" src={`/images/${image}`} alt={name} />
      <div className="flex flex-col">
        <div className="flex flex-col mx-4 my-2 mb-3 md:items-center md:mb-6">
          <h1 className="text-3xl md:text-5xl">{name}</h1>
          <h2 className="text-md italic md:my-2 md:mr-9">{scientific_name}</h2>
        </div>
        <div className="my-3 mx-6 space-y-4 md:ml-9">
          <p>
            <span className={info}>Size:</span> {size}
          </p>
          <p>
            <span className={info}>Teeth:</span> {teeth}
          </p>
          <p>
            <span className={info}>Habitat:</span> {habitat}
          </p>
          <p>
            <span className={info}>Prey:</span> {prey}
          </p>
        </div>
      </div>
    </div>
  );
}
export default SharkInfo;
