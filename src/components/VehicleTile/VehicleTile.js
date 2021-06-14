import styles from './VehicleTile.module.scss'
import { Link } from 'react-router-dom'

const getModelName = name => {
  return name.slice(name.indexOf('Model '), 18)
}

const VehicleTile = ({ vehicle }) => {
  console.log(getModelName(vehicle.name))
  return (
    <Link
      to={`/vehicleDetail/${vehicle.id}`}
      className={styles.vehicleTile}
      key={vehicle.id}
    >
      <div className={styles.imageContainer}>
        <img src={vehicle.image.url} className={styles.image} />
      </div>
      <h1>{getModelName(vehicle.name)}</h1>
    </Link>
  )
}

export default VehicleTile
