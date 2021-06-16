import { useState } from 'react'
import { useOrderVehicle } from '../../utils'
import styles from './OrderForm.module.scss'

const OrderForm = ({ vehicleId, closeForm, displayModal }) => {
  const [name, setName] = useState('')
  const [isValidName, setIsValidName] = useState(false)

  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)

  const [showValidation, setShowValidation] = useState(false)
  const [orderVehicle] = useOrderVehicle()

  function validateEmail(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
  }
  const handleEmailInput = email => {
    setEmail(email)
    setIsValidEmail(validateEmail(email))
  }
  const handleNameInput = name => {
    setName(name)
    setIsValidName(name !== '')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setShowValidation(true)
    if (isValidEmail && isValidName) {
      try {
        await orderVehicle({
          variables: {
            customerName: name,
            customerEmail: email,
            vehicle: { connect: { id: vehicleId } },
          },
        })
      } catch (error) {
        alert('Something went wrong :/')
      }
      closeForm()
      alert('Success! Thank you for your purchase!')
    }
  }

  if (!displayModal) return null
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputField}>
          <label className={styles.label}>Name: </label>
          <input
            type="text"
            className={styles.input}
            value={name}
            placeholder="John Duck"
            onChange={e => handleNameInput(e.target.value)}
          />
          {
            <p
              className={`${styles.validationMessage} ${
                !isValidName && showValidation && styles.show
              }`}
            >
              Please tell us your name
            </p>
          }
        </div>
        <div className={styles.inputField}>
          <label className={styles.label}>E-Mail: </label>
          <input
            type="text"
            className={styles.input}
            value={email}
            placeholder="John-Duck@Duckburg.com"
            onChange={e => handleEmailInput(e.target.value)}
          />
          <p
            className={`${styles.validationMessage} ${
              !isValidEmail && showValidation && styles.show
            }`}
          >
            Please enter a valid email
          </p>
        </div>
        <div>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={() => closeForm()}
          >
            Cancel
          </button>
          <button
            type="submit"
            value="Submit"
            disabled={showValidation && (!isValidName || !isValidEmail)}
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrderForm
