import { useState } from 'react'
import { useOrderVehicle } from '../../utils'

const OrderForm = ({ vehicleId, closeForm, displayModal }) => {
  const [name, setName] = useState('')
  const [isValidName, setIsValidName] = useState(true)

  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)

  const [showValidation, setShowValidation] = useState(false)
  const [
    orderVehicle,
    // { loading: mutationLoading, error: mutationError, data },
  ] = useOrderVehicle()

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
        // alert(`Submitting Name ${name} and email ${email}`)
      } catch (error) {
        // console.error(error)
      }
      closeForm(false)
    }
  }

  // console.log({ mutationLoading, mutationError, data })
  if (!displayModal) return null

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={() => closeForm(false)}>
        X
      </button>
      <label>
        Name:
        <input
          type="text"
          value={name}
          placeholder="John Duck"
          onChange={e => handleNameInput(e.target.value)}
        />
        {!isValidName && showValidation && <p>Please tell us your name</p>}
      </label>
      <label>
        E-Mail:
        <input
          type="text"
          value={email}
          placeholder="John-Duck@Duckburg.com"
          onChange={e => handleEmailInput(e.target.value)}
        />
        {!isValidEmail && showValidation && <p>Please enter a valid email</p>}
      </label>
      <button
        type="submit"
        value="Submit"
        disabled={showValidation && (!isValidName || !isValidEmail)}
      >
        Place Order
      </button>
    </form>
  )
}

export default OrderForm
