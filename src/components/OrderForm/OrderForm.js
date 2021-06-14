import { useState } from 'react'
//import { useOrderVehicle } from '../../utils'
import { useMutation, gql } from '@apollo/client'

const OrderForm = ({ vehicleId }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [orderVehicle, { loading: mutationLoading, error: mutationError }] =
    useMutation(gql`
      mutation CreateOrder(
        $customerName: String!
        $customerEmail: String!
        $vehicleId: ID
      ) {
        createOrder(
          data: {
            customerName: $customerName
            customerEmail: $customerEmail
            vehicle: { connect: { id: $vehicleId } }
          }
        ) {
          id
        }
      }
    `)
  const handleSubmit = e => {
    e.preventDefault()
    orderVehicle({ variables: { name, email, vehicleId } })
    console.log({ mutationLoading, mutationError })
    //useOrderVehicle(name, email, vehicleId)
    alert(`Submitting Name ${name} and email ${email}`)
  }

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
