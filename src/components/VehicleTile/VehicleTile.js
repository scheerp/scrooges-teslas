import styles from './VehicleTile.module.scss'
import { Link } from 'react-router-dom'

const getModelName = name => {
  return name.slice(name.indexOf('Model '), name.indexOf(' - '))
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
})

const VehicleTile = ({ vehicle }) => {
  return (
    <Link
      to={`/vehicleDetail/${vehicle.id}`}
      className={styles.vehicleTile}
      key={vehicle.id}
    >
      <div className={styles.imageContainer}>
        <img src={vehicle.image.url} className={styles.image} />
      </div>
      <p className={styles.price}>{formatter.format(vehicle.price)}</p>
      <div className={styles.detailsContainer}>
        <p>{getModelName(vehicle.name)}</p>
        <div className={styles.mileagaContainer}>
          <p className={styles.mileage}>
            {vehicle.mileage} | {vehicle.year}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default VehicleTile
