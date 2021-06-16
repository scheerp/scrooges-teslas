import styles from './VehicleOverview.module.scss'
import VehicleTile from '../../components/VehicleTile/VehicleTile'
import { useVehicles } from '../../utils.js'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

const VehicleOverview = () => {
  const { loading, error, data } = useVehicles()

  if (loading) return <LoadingSpinner />
  if (error) return <p>Something went wrong, sorry :/</p>

  return (
    <div className={styles.wrapper}>
      {data.vehicles.map(vehicle => (
        <VehicleTile vehicle={vehicle} key={vehicle.id} />
      ))}
    </div>
  )
}

export default VehicleOverview
