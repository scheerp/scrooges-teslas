import { useParams } from 'react-router-dom'

const VehicleDetail = () => {
  let { id } = useParams()
  return <h1>ID: {id}</h1>
}

export default VehicleDetail
