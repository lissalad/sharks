import { useParams } from 'react-router'
import data from "../shark-data"

function SharkInfo(props) {
  const params = useParams()
  const { id } = params // Location index
  const { name, scientificName, image } = data[id]

  return (
    <div>
      {name}
    </div>
  );
}
export default SharkInfo;