import { useState } from 'react'
import { useParams } from 'react-router-dom'
import OrderForm from '../../components/OrderForm/OrderForm'
import { useVehicle } from '../../utils'
import styles from './VehicleDetail.module.scss'

const getEnhancedDescription = description => {
  const descriptionArray = description.split('•')
  if (descriptionArray.length === 1) return description

  return (
    <ul className={styles.descriptionList}>
      {descriptionArray.map((partialString, index) =>
        index === 0 ? (
          <div key={index}>{partialString}</div>
        ) : (
          <li key={index}>- {partialString}</li>
        )
      )}
    </ul>
  )
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
})

const getModelName = name => {
  return name.slice(name.indexOf('Model '), name.indexOf(' - '))
}

const VehicleDetail = () => {
  const [displayOrderFormModal, setDisplayOrderFormModal] = useState(false)
  const { id } = useParams()

  const { loading, error, data } = useVehicle(id)

  const closeModal = () => {
    setDisplayOrderFormModal(false)
    document.body.style.overflow = 'scroll'
  }
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{getModelName(data.vehicle.name)}</h1>
        <div className={styles.headerWrapper}>
          <img src={data.vehicle.image.url} className={styles.image} />

          <div className={styles.vehicleDataWrapper}>
            <ul className={styles.vehicleData}>
              <li>Price: </li>
              <li>Mileage: </li>
              <li>VIN: </li>
              <li>Year: </li>
            </ul>
            <ul className={styles.vehicleDataValues}>
              <li>{formatter.format(data.vehicle.price)}</li>
              <li>{data.vehicle.mileage}</li>
              <li>{data.vehicle.vin}</li>
              <li>{data.vehicle.year}</li>
            </ul>
          </div>
        </div>
        <button
          className={styles.orderButton}
          type="button"
          onClick={() => {
            document.body.style.overflow = 'hidden'
            setDisplayOrderFormModal(true)
          }}
        >
          Order
        </button>
        <div>{getEnhancedDescription(data.vehicle.description)}</div>
      </div>

      <OrderForm
        vehicleId={id}
        closeForm={closeModal}
        displayModal={displayOrderFormModal}
      />
    </>
  )
}

export default VehicleDetail
