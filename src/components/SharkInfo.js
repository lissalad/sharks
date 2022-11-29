import { useParams } from "react-router";
import data from "../shark-data";

function SharkInfo(props) {
  const params = useParams();
  const { id } = params; // Location index
  const { name, scientific_name, image, teeth, size, habitat, prey } = data[id];
  const info = "font-bold";

  return (
    <div className="shark-info md:mt-3">
      {/* image */}
      <img
        className="shark-info-image rounded-lg shadow-xl lg:mr-10"
        src={`/images/${image}`}
        alt={name}
      />

      {/* text info */}
      <div className="text-info">
        <div className="flex flex-col my-2 pb-5 space-y-1 text-center border-b border-gray-400/70">
          <h1 className="text-5xl lg:text-3xl">{name}</h1>
          <h2 className="text-xl italic">{scientific_name}</h2>
        </div>
        <div className="mt-7 space-y-4 text-lg lg:text-sm">
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
