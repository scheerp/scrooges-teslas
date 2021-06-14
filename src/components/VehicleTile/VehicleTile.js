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
      <span className={styles.title}>{getModelName(vehicle.name)}</span>
      <div className={styles.detailsContainer}>
        <span>{vehicle.price}</span>
        <div className={styles.mileagaContainer}>
          <p className={styles.mileage}>{vehicle.mileage}</p>
          <p className={styles.year}>{vehicle.year}</p>
        </div>
      </div>
    </Link>
  )
}

export default VehicleTile
