import Shark from "./Shark";
import * as data from "../shark-data.json";

function Gallery() {
  const sharks = data;
  console.log(sharks)
  console.log("hello")

  return (
    <div className="flex flex-row p-4 flex-wrap justify-center items-center">
      {sharks.default.map(
        (shark, i) => {
          return <Shark id={i} name={shark.name} scientificName={shark.scientific_name} image={shark.image}/>
        }
      )}
    </div>
  );
}

export default Gallery;