import { useState } from 'react'
import { useParams } from 'react-router-dom'
import OrderForm from '../components/OrderForm/OrderForm'
import { useVehicle } from '../utils'

const getEnhancedDescription = description => {
  const descriptionArray = description.split('•')
  if (descriptionArray.length === 1) return description

  return (
    <ul>
      {descriptionArray.map((partialString, index) =>
        index === 0 ? (
          <p key={index}>{partialString}</p>
        ) : (
          <li key={index}>{partialString}</li>
        )
      )}
    </ul>
  )
}

const VehicleDetail = () => {
  const [displayOrderFormModal, setDisplayOrderFormModal] = useState(false)
  const { id } = useParams()

  const { loading, error, data } = useVehicle(id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <h1>{data.vehicle.name}</h1>
      <img src={data.vehicle.image.url} />
      <button type="button" onClick={() => setDisplayOrderFormModal(true)}>
        Order
      </button>
      <OrderForm
        vehicleId={id}
        closeForm={setDisplayOrderFormModal}
        displayModal={displayOrderFormModal}
      />
      <div>{getEnhancedDescription(data.vehicle.description)}</div>
    </>
  )
}

export default VehicleDetail
