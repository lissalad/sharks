import Shark from "./Shark";
import * as data from "../shark-data.json";

function Gallery() {
  const sharks = data;

  return (
    <div className="flex flex-row p-4 flex-wrap justify-center items-center w-full mt-28 z-0">
      {sharks.default.map(
        (shark, i) => {
          return <Shark id={i} name={shark.name} scientificName={shark.scientific_name} image={shark.image}/>
        }
      )}
    </div>
  );
}

export default Gallery;