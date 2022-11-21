import { useParams } from "react-router";
import data from "../shark-data";

function SharkInfo(props) {
  const params = useParams();
  const { id } = params; // Location index
  const { name, scientific_name, image, teeth, size, habitat, prey } = data[id];
  const info = "font-bold";

  return (
    <div className="shark-info">
      {/* image */}
      <img className="shark-info-image" src={`/images/${image}`} alt={name} />
      {/* text info */}
      <div className="text-info space-y-9 mx-9">
        <div className="flex flex-col my-2 mb-3 space-y-2">
          <h1 className="text-3xl md:text-5xl">{name}</h1>
          <h2 className="text-md italic">{scientific_name}</h2>
        </div>
        <div className="my-3 space-y-4 text-lg">
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
