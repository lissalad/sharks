import Shark from "./Shark";
import * as data from "../shark-data.json";

function Gallery() {
  const sharks = data;

  return (
    <div className="shark-gallery">
      {sharks.default.map((shark, i) => {
        return (
          <Shark
            id={i}
            name={shark.name}
            scientificName={shark.scientific_name}
            image={shark.image}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
