import { useState } from 'react'
import { useOrderVehicle } from '../../utils'

const OrderForm = ({ vehicleId }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [
    orderVehicle,
    { loading: mutationLoading, error: mutationError, data },
  ] = useOrderVehicle()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await orderVehicle({
        variables: {
          customerName: name,
          customerEmail: email,
          vehicle: { connect: { id: vehicleId } },
        },
      })
      alert(`Submitting Name ${name} and email ${email}`)
    } catch (error) {
      console.error(error)
    }
  }

  console.log({ mutationLoading, mutationError, data })

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        E-Mail:
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default OrderForm
