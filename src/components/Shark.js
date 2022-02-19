

function Shark() {
  // const { name, scientificName, image} = props
  const name = "Blue Shark";
  const scientificName = "Prionace Glauca";
  const image = "blue.png";
  const imagePath = require("../images/" + image);

  return(
  <card className="relative">
    <img className="rounded" src={imagePath} alt={name}/>
    <p className="absolute text-white text-4xl left-1 top-48 whitespace-nowrap">{name}</p>
  </card>
  )
}
export default Shark;