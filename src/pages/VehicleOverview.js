import VehicleTile from '../components/VehicleTile/VehicleTile'
import { useVehicles } from '../utils.js'

const VehicleOverview = () => {
  const { loading, error, data } = useVehicles()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)

  return data.vehicles.map(vehicle => (
    <VehicleTile vehicle={vehicle} key={vehicle.id} />
  ))
}

export default VehicleOverview
