import { useQuery, useMutation, gql } from '@apollo/client'

export const useVehicles = () => {
  return useQuery(gql`
    query GetAllVehicles {
      vehicles {
        id
        mileage
        year
        name
        price
        vin
        description
        image {
          url
          fileName
        }
      }
    }
  `)
}

export const useVehicle = id => {
  return useQuery(gql`
  query GetVehicle {
    vehicle(where: { id: "${id}" }) {
      id
      mileage
      year
      name
      price
      vin
      description
      image {
        url
        fileName
      }
    }
  }
`)
}

export const useOrderVehicle = (name, email, vehicleId) => {
  return useMutation(gql`
    mutation CreateOrder{
      createOrder(
        data: {
          customerName: ${name}
          customerEmail: ${email}
          vehicle: { connect: { id: ${vehicleId} } }
        }
      ) {
        id
      }
    }
  `)
}
