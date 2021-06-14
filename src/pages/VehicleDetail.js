import { useParams } from 'react-router-dom'
import OrderForm from '../components/OrderForm/OrderForm'
import { useVehicle } from '../utils'

const getEnhancedDescription = description => {
  const descriptionArray = description.split('•')
  if (descriptionArray.length === 1) return description

  return (
    <ul>
      {descriptionArray.map((partialString, index) => (
        <li key={index}>{partialString}</li>
      ))}
    </ul>
  )
}

const VehicleDetail = () => {
  const { id } = useParams()

  const { loading, error, data } = useVehicle(id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <h1>{data.vehicle.name}</h1>
      <img src={data.vehicle.image.url} />
      <OrderForm vehicleId={id} />
      <div>{getEnhancedDescription(data.vehicle.description)}</div>
    </>
  )
}

export default VehicleDetail
